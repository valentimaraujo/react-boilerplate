import { render, screen } from '@testing-library/react'
import BaseTemplate from './BaseTemplate'

describe('<BaseTemplate />', () => {
  it('renders correctly', () => {
    render(<BaseTemplate sampleTextProp='renders correctly' />)
    expect(screen.getByText(/renders correctly/i)).toBeInTheDocument()
  })
})
