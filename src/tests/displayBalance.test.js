/* eslint-disable no-undef */
import React from 'react'
import { render } from '@testing-library/react'
import DisplayBalance from '../components/displayBalance.tsx'

test('renders a message', () => {
  const { getByText } = render(<DisplayBalance title="Title one" value={'34'} />)
  const messageElement = getByText(/Title one/i)
  expect(messageElement).toBeInTheDocument()
})