import React, { useState } from "react"
import { useForm } from "react-hook-form"
import formStyles from "../../styles/form.module.scss"

export default function GetInvolvedForm() {
    const [disabledButton, setDisabledButton] = useState(false)
    const [message, setMessage] = useState("")

    const { register, handleSubmit, errors, reset } = useForm()

    const url = process.env.GATSBY_SERVER_URL.replace(/\/$/, "")

    const onSubmit = async data => {
        console.log(data)
        try {
            setDisabledButton(true)
            setMessage("")
            const res = await fetch(`${url}/forms/get-involved`, {
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
                <label htmlFor="firstName" className={formStyles.label}>
                    First Name
                </label>
                <input name="firstName" ref={register({ required: true })} />
                {errors.firstName && (
                    <p className={formStyles.errorMessage}>
                        First name is required.
                    </p>
                )}

                <label htmlFor="lastName" className={formStyles.label}>
                    Last Name
                </label>
                <input name="lastName" ref={register({ required: true })} />
                {errors.lastName && (
                    <p className={formStyles.errorMessage}>
                        Last name is required.
                    </p>
                )}

                <label htmlFor="university" className={formStyles.label}>
                    University
                </label>
                <select
                    name="university"
                    defaultValue="Select"
                    ref={register({ required: true })}
                >
                    <option value="" selected>
                        Select
                    </option>
                    <option value="Not affiliated / Other University">
                        Not affiliated to a university / Other
                    </option>
                    <option value="Anglia Ruskin">Anglia Ruskin</option>
                    <option value="Aston">Aston</option>
                    <option value="Birmingham">Birmingham</option>
                    <option value="Birmingham City">Birmingham City</option>
                    <option value="Brighton and Sussex">
                        Brighton and Sussex
                    </option>
                    <option value="Bristol">Bristol</option>
                    <option value="Brunel">Brunel</option>
                    <option value="Cambridge">Cambridge</option>
                    <option value="City">City</option>
                    <option value="Coventry">Coventry</option>
                    <option value="De Montfort">De Montfort</option>
                    <option value="East London">East London</option>
                    <option value="Edinburgh">Edinburgh</option>
                    <option value="Glasgow">Glasgow</option>
                    <option value="Hertfordshire">Hertfordshire</option>
                    <option value="Imperial">Imperial</option>
                    <option value="KCL">KCL</option>
                    <option value="Kent">Kent</option>
                    <option value="Kingston">Kingston</option>
                    <option value="Lincolnshire">Lincolnshire</option>
                    <option value="London Goldsmiths">Goldsmiths</option>
                    <option value="London Met">London Met</option>
                    <option value="London Southbank">London Southbank</option>
                    <option value="Loughborough">Loughborough</option>
                    <option value="Manchester Met">Manchester Met</option>
                    <option value="Nottingham">Nottingham</option>
                    <option value="Nottingham Trent">Nottingham Trent</option>
                    <option value="Oxford">Oxford</option>
                    <option value="Queen Mary">Queen Mary</option>
                    <option value="Reading">Reading</option>
                    <option value="Roehampton">Roehampton</option>
                    <option value="SOAS">SOAS</option>
                    <option value="Southampton">Southampton</option>
                    <option value="St George's">St George's</option>
                    <option value="Staffordshire">Staffordshire</option>
                    <option value="UCL">UCL</option>
                    <option value="Warwick">Warwick</option>
                </select>
                {errors.university && (
                    <p className={formStyles.errorMessage}>
                        University is required.
                    </p>
                )}
                <label htmlFor="course" className={formStyles.label}>
                    Course
                </label>
                <input name="course" ref={register({ required: false })} />

                <label htmlFor="email" className={formStyles.label}>
                    Email Address
                </label>
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

                <label htmlFor="phoneNumber" className={formStyles.label}>
                    Phone Number
                </label>
                <input name="phoneNumber" ref={register({ required: true })} />
                {errors.phoneNumber && (
                    <p className={formStyles.errorMessage}>
                        Phone number is required.
                    </p>
                )}
                <label htmlFor="studentID" className={formStyles.label}>
                    Student ID
                </label>
                <input name="studentID" ref={register({ required: false })} />

                <label
                    htmlFor="somethingInteresting"
                    className={formStyles.label}
                >
                    Tell us something interesting about yourself
                </label>
                <textarea
                    style={{
                        resize: "none",
                        "-webkit-box-sizing": "border-box",
                        "-moz-box-sizing": "border-box",
                        "box-sizing": "border-box",
                        width: "100%",
                    }}
                    name="somethingInteresting"
                    rows={4}
                    ref={register({ required: false })}
                />

                <input type="submit" disabled={disabledButton} />

                <p className={formStyles.message}>{message}</p>
            </form>
        </div>
    )
}
