import React, { useState } from "react"
import { useForm } from "react-hook-form"
import formStyles from "../../styles/form.module.scss"

export default function SetUpAKCSOCForm() {
    const [disabledButton, setDisabledButton] = useState(false)
    const [message, setMessage] = useState("")

    const { register, handleSubmit, errors, reset } = useForm()

    const url = process.env.GATSBY_SERVER_URL.replace(/\/$/, "")

    const onSubmit = async data => {
        try {
            setDisabledButton(true)
            setMessage("")
            const res = await fetch(`${url}/forms/set-up-a-kcsoc`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            })
            reset()
            if (res.status === 201) {
                setMessage("Form submitted successfully")
            } else {
                setMessage("Form submission failed")
            }

            setDisabledButton(false)
        } catch (e) {
            setDisabledButton(false)

            console.log(e)
        }
    }

    return (
        <div className={formStyles.container}>
            <form className={formStyles.form} onSubmit={handleSubmit(onSubmit)}>
                <label className={formStyles.label}>First Name</label>
                <input name="firstName" ref={register({ required: true })} />
                {errors.firstName && (
                    <p className={formStyles.errorMessage}>
                        First name is required.
                    </p>
                )}

                <label className={formStyles.label}>Last Name</label>
                <input name="lastName" ref={register({ required: true })} />
                {errors.lastName && (
                    <p className={formStyles.errorMessage}>
                        Last name is required.
                    </p>
                )}

                <label className={formStyles.label}>Email Address</label>
                <input
                    name="email"
                    ref={register({
                        required: true,
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "Hello",
                        },
                    })}
                />
                {errors.email && !errors.email.message && (
                    <p className={formStyles.errorMessage}>
                        Email address is required.
                    </p>
                )}
                {errors.email && errors.email.message && (
                    <p className={formStyles.errorMessage}>
                        Valid email address required.
                    </p>
                )}
                <label className={formStyles.label}>Phone Number</label>
                <input name="phoneNumber" ref={register({ required: true })} />
                {errors.phoneNumber && (
                    <p className={formStyles.errorMessage}>
                        Phone number is required.
                    </p>
                )}
                <input type="submit" />
                <p className={formStyles.message}>{message}</p>
            </form>
        </div>
    )
}
