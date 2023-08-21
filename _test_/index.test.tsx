import { render } from '@testing-library/react'
import Title from '@/app/components/Title/Title'
import { screen } from '@testing-library/dom'
import Button from '@/app/components/Button/Button'


describe('Main page', () => {
  it('Should render Title', () => {
    render(<Title />)
    const header = screen.getByRole('heading')
    const headerText = 'ARMAGEDDON 2023'
    expect(header).toHaveTextContent(headerText)
  })
  it('Should render Button', () => {
    render(<Button title={'заказать'}/>)
    const btnOrder = screen.getByRole('button')
    expect(btnOrder).toHaveTextContent('заказать')
  })
})
