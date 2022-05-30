import React from 'react'
import { render, screen } from '@testing-library/react'

import Title from './Title'

describe('Title', () => {
  it('renders the provided text', () => {
    const children = 'children'
    render(<Title>{children}</Title>)

    expect(screen.getByText(children)).toBeInTheDocument()
  })
})
