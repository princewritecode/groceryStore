import { render, screen } from "@testing-library/react";
import { Contact } from "../Contactus";
import '@testing-library/jest-dom';

describe(
    "Contact us page ", () =>
{

    it('should load contact us component', () =>
    {

        render(<Contact></Contact>);
        const heading = screen.getByRole("heading");
        expect(heading).toBeInTheDocument();
    });
    test('should load button', () =>
    {

        render(<Contact></Contact>);
        const button = screen.getByRole("button");
        expect(button).toBeInTheDocument();
    });
    test('should load click text', () =>
    {

        render(<Contact></Contact>);
        const text = screen.getByText("Click");
        expect(text).toBeInTheDocument();
    });
    test('should check textbox click text', () =>
    {
        render(<Contact></Contact>);
        const textbox = screen.getAllByRole("textbox");
        console.log(textbox.lenght);
        expect(textbox.length).toBe(2);
    });


}
)

