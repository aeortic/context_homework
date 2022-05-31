import React from 'react' 
import { render, screen, fireEvent } from '@testing-library/react';
import * as reactRedux from 'react-redux'
import ClientList from './ClientList';

describe('ClientList', () => {

  it('renders the Filter', () => {

    const {getByText} = render(<ClientList clientList={[]}/>)

    expect(getByText(/filter/i)).toBeInTheDocument()

  })

  it('renders the client list', () => {
    
    const clientList = [{name: "Test User"}, {name: "Best User"}]

    const {getByText} = render(<ClientList clientList={clientList} />);

    expect(getByText(/best user/i)).toBeInTheDocument()
    
    expect(getByText(/test user/i)).toBeInTheDocument()
  })

  it('changes due to the filter', () => {

    const clientList = [{name: "Test User"}, {name: "Best User"}]

    const {
      getByLabelText, 
      getByText,
      queryByText
    } = render(<ClientList clientList={clientList} />);

    fireEvent.change(getByLabelText(/filter/i), {target: {value:"Best"}})

    expect(getByText(/best user/i)).toBeInTheDocument()

    expect(queryByText(/test user/i)).toBeNull()
  })
})
