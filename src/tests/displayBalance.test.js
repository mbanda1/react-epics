/* eslint-disable no-undef */
import React from 'react'
import { render } from '@testing-library/react'
import DisplayBalance from '../components/displayBalance'

test('renders a message', () => {
  const { getByText } = render(<DisplayBalance title="Title one" />)
  const messageElement = getByText(/Title one/i)
  expect(messageElement).toBeInTheDocument()
})