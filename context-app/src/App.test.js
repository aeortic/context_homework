import React from 'react' 
import { render, screen } from '@testing-library/react';
import * as reactRedux from 'react-redux'
import App from './App';
import * as clientActions from './actions/clientActions'

describe('App', () => {

  const useDispatchSpy = jest.spyOn(reactRedux, 'useDispatch')
  const useSelectorSpy = jest.spyOn(reactRedux, 'useSelector')

  beforeEach(() => {
    useDispatchSpy.mockClear()
    useSelectorSpy.mockClear()
  })

  it('renders Title', () => {

    const mockDispatch = jest.fn()
    useDispatchSpy.mockReturnValue(mockDispatch)
    
    useSelectorSpy.mockImplementation(callback => callback({
      clients: []
    }))

    const {getByText} = render(<App />);

    expect(getByText(/client list/i)).toBeInTheDocument()

  })

  it('loads the client list', () => {

    const mockDispatch = jest.fn()
    useDispatchSpy.mockReturnValue(mockDispatch)
    
    useSelectorSpy.mockImplementation(callback => callback({
      clients: []
    }))

    // bit of magic to rewire the load action so that we can 
    // detect if it has been called. 
    const loadClientListSpy = jest.spyOn(clientActions, 'loadClientList')
    loadClientListSpy.mockImplementation(() => "mockedClientList")

    render(<App />);

    expect(mockDispatch).toHaveBeenCalledWith("mockedClientList")

  })

  it('renders the client list', () => {
    const mockDispatch = jest.fn()
    useDispatchSpy.mockReturnValue(mockDispatch)
    
    useSelectorSpy.mockImplementation(callback => callback({
      clients: {
        clientList: [{name: "Test User"}, {name: "Best User"}]
      }
    }))

    const {getByText} = render(<App />);

    expect(getByText(/test user/i)).toBeInTheDocument()
  })
})