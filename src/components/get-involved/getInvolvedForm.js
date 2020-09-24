import React from "react"
import { useForm } from "react-hook-form"
import getInvolvedFormStyles from "../../styles/components/get-involved/getInvolvedForm.module.scss"

export default function GetInvolvedForm() {
    const { register, handleSubmit, errors } = useForm()
    const onSubmit = data => console.log(data)

    return (
        <div className={getInvolvedFormStyles.container}>
            <form
                className={getInvolvedFormStyles.form}
                onSubmit={handleSubmit(onSubmit)}
            >
                <label className={getInvolvedFormStyles.label}>
                    First Name
                </label>
                <input name="firstName" ref={register({ required: true })} />
                {errors.firstName && <p>First name is required.</p>}

                <label className={getInvolvedFormStyles.label}>Last Name</label>
                <input name="lastName" ref={register({ required: true })} />
                {errors.lastName && <p>Last name is required.</p>}

                <label className={getInvolvedFormStyles.label}>
                    University
                </label>
                <select name="university" ref={register({ required: true })}>
                    <option value="" selected disabled hidden>
                        Select
                    </option>

                    <option value="Brunel">
                        Not affiliated with a university
                    </option>
                    <option value="City">City</option>
                    <option value="Imperial">Imperial</option>
                    <option value="KCL">KCL</option>
                    <option value="Kingston">Kingston</option>
                    <option value="London Met">London Met</option>
                    <option value="Queen Mary">Queen Mary</option>
                    <option value="Roehampton">Roehampton</option>
                    <option value="SOAS">SOAS</option>
                    <option value="St George's">St George's</option>
                    <option value="UCL">UCL</option>
                    <option value="East London">East London</option>
                    <option value="Kent">Kent</option>
                    <option value="Southampton">Southampton</option>
                    <option value="Hertfordshire">Hertfordshire</option>
                    <option value="Cambridge">Cambridge</option>
                    <option value="Oxford">Oxford</option>
                    <option value="Bristol">Bristol</option>
                    <option value="Reading">Reading</option>
                    <option value="Warwick">Warwick</option>
                    <option value="DMU">DMU</option>
                    <option value="Coventry">Coventry</option>
                    <option value="Aston">Aston</option>
                    <option value="BCU">BCU</option>
                    <option value="Birmingham">Birmingham</option>
                    <option value="Loughborough">Loughborough</option>
                    <option value="Nottingham">Nottingham</option>
                    <option value="MMU">MMU</option>
                    <option value="Glasgow">Glasgow</option>
                    <option value="Edinburgh">Edinburgh</option>
                </select>
                {errors.university && <p>University is required.</p>}

                <label className={getInvolvedFormStyles.label}>
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
                    <p>Email address is required.</p>
                )}
                {errors.email && errors.email.message && (
                    <p>Valid email address required.</p>
                )}
                <label className={getInvolvedFormStyles.label}>
                    Phone Number
                </label>
                <input name="phoneNumber" ref={register({ required: true })} />
                {errors.phoneNumber && <p>Phone number is required.</p>}
                <input type="submit" />
            </form>
        </div>
    )
}
