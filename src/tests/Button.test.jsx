import React from "react"
import { render, screen, fireEvent } from "@testing-library/react"
import "@testing-library/jest-dom"
import Button from "../components/Button"

describe("Button component", () => {
  const handleClick = jest.fn()
  render(
    <Button primary onClick={handleClick}>
      Click Me
    </Button>
  )
  const buttonElement = screen.getByText(/Click Me/i)
  expect(buttonElement).toBeInTheDocument()
  fireEvent.click(buttonElement)
  expect(handleClick).toHaveBeenCalledTimes(1)
})
