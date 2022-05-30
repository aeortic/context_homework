import React from 'react' 
import { render, screen } from '@testing-library/react';
import Filter from './Filter';

describe('Filter', () => {

  it('renders label', () => {

    const {getByText} = render(<Filter 
      label="filter test"
      unfilteredList={[]}
      onChange={() => {}}
    />);

    expect(getByText(/filterTest/i)).toBeInTheDocument()

  })
})
