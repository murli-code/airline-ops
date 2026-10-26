import { render, screen } from '@testing-library/react'
import Home from '@/app/page'

describe('Home page', () => {
  it('shows the login page text', () => {
    // Arrange: render the component in the test DOM
    render(<Home />)

    // Act: find the element the user would see
    const text = screen.getByText(/login page/i)

    // Assert: check that it is on the page
    expect(text).toBeInTheDocument()
  })
})
