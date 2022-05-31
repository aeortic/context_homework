import MockAdapter from 'axios-mock-adapter'
import axios from 'axios'

import {
  loadClientList
} from '../actions/clientActions'

import getFinalStateFromAction from './getFinalStateFromAction'
import setupMockStore from './setupMockStore'

// The idea behind this duck test is to try to avoid the trap of 
// testing the implementation. Lots of the stuff here is boilerplate
// that really should be abstracted away. We are using strong conventions
// in the setup of the asychronous behavior, so the tests should also 
// have those conventions enshrined using abstraction.
//
// The main thing is that we want to know that when the action is called,
// it produces the desired result in the redux store. If that is working,
// then all the components that depend upon that behavior will also work.
// Inspecting the actual behavior of the API is a topic for an integration
// test, and outside the scope of this exercise.

const store = setupMockStore({
  clients: {
    clientList: []
  }
})
const mock = new MockAdapter(axios);

const testResponse = "some_response"

describe('Testing loadClientList', () => {
  beforeEach(() => {
    store.clearActions()
    mock.reset()
    window.alert = jest.fn()

  })

  afterEach(() => {
    jest.resetAllMocks();
    window.alert.mockClear();
  })

  it('should handle success', async () => {
    // we can use environment variables to set the host
    // depending on the context to differenciate between
    // dev and prod in a mature application
    mock.onGet("http://localhost:3001/client_list").reply(200, testResponse)

    const finalState = await getFinalStateFromAction(store, loadClientList)

    expect(finalState).toEqual({clients: {clientList: testResponse}})
  })

  it('should handle failure', async () => {

    mock.onGet("http://localhost:3001/client_list").reply(400)

    const finalState = await getFinalStateFromAction(store, loadClientList)

    // no change, because of error
    //
    // Note that we could have persisted the error state, in the event that we
    // are reasonably confident that the error state would be tied to a specific
    // bit of UX requiring that the error message be displayed in-line with a 
    // button or something. In this simplistic example, that seems a bit overboard.
    expect(finalState).toEqual(store.getState())

    const errorMessage = `The list of clients could not be fetched. \n`
      +`Reload the page to try again. If you continue to experience this error, `
      +`contact the administrator at seminative@gmail.com`

    expect(window.alert.mock.calls[0][0].replace(/\s/g, '')).toEqual(errorMessage.replace(/\s/g, '')) 
  })
})