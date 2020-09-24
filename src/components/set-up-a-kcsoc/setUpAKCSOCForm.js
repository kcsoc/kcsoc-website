import React from "react"
import { useForm } from "react-hook-form"
import formStyles from "../../styles/form.module.scss"

export default function SetUpAKCSOCForm() {
    const { register, handleSubmit, errors } = useForm()
    const onSubmit = data => console.log(data)

    return (
        <div className={formStyles.container}>
            <form className={formStyles.form} onSubmit={handleSubmit(onSubmit)}>
                <label className={formStyles.label}>First Name</label>
                <input name="firstName" ref={register({ required: true })} />
                {errors.firstName && <p>First name is required.</p>}

                <label className={formStyles.label}>Last Name</label>
                <input name="lastName" ref={register({ required: true })} />
                {errors.lastName && <p>Last name is required.</p>}

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
                    <p>Email address is required.</p>
                )}
                {errors.email && errors.email.message && (
                    <p>Valid email address required.</p>
                )}
                <label className={formStyles.label}>Phone Number</label>
                <input name="phoneNumber" ref={register({ required: true })} />
                {errors.phoneNumber && <p>Phone number is required.</p>}
                <input type="submit" />
            </form>
        </div>
    )
}
