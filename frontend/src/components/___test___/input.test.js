import { render, screen, cleanup } from '@testing-library/react'
import Input from '../input/input'

test('should fail component with id do not exists', () => {
    render(<Input
        index={0}
        url={""}
        onHandleChange={() => console.log("Changed")}
        onHandleChangeEnd={() => console.log("Change Ended")} />)
    const inputElement = screen.getByTestId('input-2');

    expect(inputElement).toBeInTheDocument();
})


test('should pass component with id do exists', () => {
    render(<Input 
        index={0}
        url={""}
        onHandleChange={() => console.log("Changed")}
        onHandleChangeEnd={() => console.log("Change Ended")} />)
    const inputElement = screen.getByTestId('input-1');

    expect(inputElement).toBeInTheDocument();
})
