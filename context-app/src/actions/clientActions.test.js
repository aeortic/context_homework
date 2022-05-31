import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import MockAdapter from 'axios-mock-adapter'
import axios from 'axios'
import {
  loadClientList
} from './clientActions'

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const store = mockStore({
  client: {
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

    await store.dispatch(loadClientList())
    expect(store.getActions()).toEqual("your mom")
  })
})