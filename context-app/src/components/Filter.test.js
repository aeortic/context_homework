import React from 'react' 
import { render, screen, fireEvent } from '@testing-library/react';
import Filter from './Filter';

describe('Filter', () => {

  it('renders the label', () => {

    const {getByText} = render(<Filter 
      label="filter test"
      unfilteredList={[]}
      onChange={() => {}}
    />)

    expect(getByText(/filter test/i)).toBeInTheDocument()

  })

  it('filters by key-value', () => {

    const mockCallBack = jest.fn()

    const testList = [
        {test_key: "Test User", shmeggle_key: "precious"}, 
        {test_key: "Best User", shmeggle_key: "mine"},
        {blast_key: "boom"}
      ]

    const testListFiltered = [
      {test_key: "Best User", shmeggle_key: "mine"}
    ]

    const {queryByLabelText, getByLabelText} = render(<Filter
      label="filter test"
      unfilteredList={testList}
      onChange={mockCallBack}
    />)

    expect(mockCallBack).toHaveBeenCalledWith(testList)

    mockCallBack.mockClear()

    fireEvent.change(getByLabelText(/filter test/i), {target: {value:"mine"}})

    expect(mockCallBack).toHaveBeenCalledWith(testListFiltered)
  })
  
  it('resets when provided an empty string', () => {

    const mockCallBack = jest.fn()

    const testList = [
        {test_key: "Test User", shmeggle_key: "precious"}, 
        {test_key: "Best User", shmeggle_key: "mine"},
        {blast_key: "boom"}
      ]

    const {queryByLabelText, getByLabelText} = render(<Filter
      label="filter test"
      unfilteredList={testList}
      onChange={mockCallBack}
    />)

    fireEvent.change(getByLabelText(/filter test/i), {target: {value:"mine"}})
    
    mockCallBack.mockClear()

    fireEvent.change(getByLabelText(/filter test/i), {target: {value:""}})

    expect(mockCallBack).toHaveBeenCalledWith(testList)
  })

  it('returns an empty array if there is no match', () => {

    const mockCallBack = jest.fn()

    const testList = [
        {test_key: "Test User", shmeggle_key: "precious"}, 
        {test_key: "Best User", shmeggle_key: "mine"},
        {blast_key: "boom"}
      ]

    const {queryByLabelText, getByLabelText} = render(<Filter
      label="filter test"
      unfilteredList={testList}
      onChange={mockCallBack}
    />)

    mockCallBack.mockClear()

    fireEvent.change(getByLabelText(/filter test/i), {target: {value:"samoflange"}})

    expect(mockCallBack).toHaveBeenCalledWith([])
  })
})
