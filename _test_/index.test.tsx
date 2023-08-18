import { render, screen } from '@testing-library/react'
import Title from '@/app/components/Title/Title'

describe('Title', () => {
  it('renders a heading', () => {
    render(<Title />)
  })
})
