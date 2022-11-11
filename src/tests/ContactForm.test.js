import React from "react";
import ContactForm from '../components/ContactForm'
import { render, screen } from '@testing-library/react'

describe(ContactForm, () => {
    it("Form Should Exist", () => {
        render(<ContactForm />)

        const form = screen.getByTestId('form')

        expect(form).toBeTruthy()
    })

    it("Post Comments Button Should Submit Form", () => {

    })
})