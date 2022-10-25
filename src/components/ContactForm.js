import { useFormik } from 'formik'
import React from 'react'
import { contactSchema } from '../schemas/Index'

const onSubmit = () => {
    console.log("submitted");
}

const ContactForm = () => {

    const { values, errors, touched, isSubmitting, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues: {
            name: "",
            email: "",
            comments: ""
        },
        validationSchema: contactSchema,
        onSubmit
    })

    return (
        <>
            <div className="contact-form">
                <div className='container'>
                    <h3>Come in Contact with Us</h3>
                    <form noValidate onSubmit={handleSubmit}>

                        <div className='name-email'>
                            <div className="form-input">
                                <input className={errors.name && touched.name ? "input-error" : ""} id='name' value={values.name} onBlur={handleBlur} onChange={handleChange} type="text" placeholder='Your Name' />
                                <div className="error">
                                    {errors.name && touched.name && <p className='error-message'>{errors.name}</p>}
                                </div>

                            </div>

                            <div className="form-input">
                                <input className={errors.email && touched.email ? "input-error" : ""} id='email' value={values.email} onBlur={handleBlur} onChange={handleChange} type="email" placeholder='Your Mail' />
                                <div className="error">
                                    {errors.email && touched.email && <p className='error-message'>{errors.email}</p>}
                                </div>

                            </div>
                        </div>

                        <div className="comments">
                            <input className={errors.comments && touched.comments ? "input-error" : ""} id='comments' value={values.comments} onBlur={handleBlur} onChange={handleChange} type="text" placeholder='Comments' />
                            {errors.comments && touched.comments && <p className='error-message'>{errors.comments}</p>}
                        </div>

                        <button type='submit'>Post Comments</button>

                    </form>
                </div>
            </div>
        </>
    )
}

export default ContactForm