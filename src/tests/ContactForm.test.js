import ContactForm from "../components/ContactForm"
import { render, screen, fireEvent } from '@testing-library/react'
import user from '@testing-library/user-event'


describe(ContactForm, () => {
    const onSubmit = jest.fn()

    beforeEach(() => {
        onSubmit.mockClear()
        render(<ContactForm onSubmit={onSubmit} />)
    })

    it("onSubmit should be true", () => {
        user.type(getName(), "Lucas")
        user.type(getEmail(), "Lucasnykvist@gmail.com")
        user.type(getComment(), "Test comment")

        const button = screen.getByRole('button', { name: /post comments/i })
        fireEvent.click(button)

        expect(onSubmit).toBeTruthy()
    })

})

const getName = () => {
    return screen.getAllByPlaceholderText(/your name/i)
}

const getEmail = () => {
    return screen.getByPlaceholderText(/your mail/i)
}

const getComment = () => {
    return screen.getByPlaceholderText(/comments/i)
}
