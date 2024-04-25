import { useState } from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import { FaAngleLeft } from "react-icons/fa6";
import { createUser } from "../../utilities/axios";

import { FaLock } from "react-icons/fa6";
import { FaUser } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";

import './register.scss'
import '../../styles/variables.scss'


export default function Register() {
    const navigate = useNavigate();

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errors, setErrors] = useState('')


    const submitRegister = (e) => {
        e.preventDefault();
        if (email.length > 0 && firstName.length > 0 && password.length > 0 && lastName.length > 0) {
            createUser(firstName, lastName, email, password)
                .then(res => {
                    console.log('from register page', res)
                    if (res.message === 'User created') {
                        navigate('/home')
                    } else {
                        setErrors(res.message)
                    }

                })
        } else {
            setErrors('Please fill out form before submitting.')
        }
    }

    return (
        <div className="container">
            <div className="glassPanel register">
                <Link to={'/'} className="backButton"><FaAngleLeft />Back</Link>
                <form>
                    <div className="registerTagline">Fill out the fields below to get started.</div>
                    {errors.length > 0 ?
                        <p>{errors}</p> :
                        <></>}
                    <div>
                        <FaUser color="rgba(0, 0, 0, 0.2)" />
                        <input type="text"
                            placeholder="First Name"
                            onChange={(e) => setFirstName(e.target.value)}
                        />
                    </div>
                    <div>
                        <FaUser color="rgba(0, 0, 0, 0.2)" />
                        <input type="text"
                            placeholder="Last Name"
                            onChange={(e) => setLastName(e.target.value)}
                        /></div>

                    <div>
                        <IoMail color="rgba(0, 0, 0, 0.2)" />
                        <input type="text"
                            placeholder="Email"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div>
                        <FaLock color="rgba(0, 0, 0, 0.2)" /><input type="password"
                            placeholder="Password"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="button" onClick={submitRegister}>SIGN UP</div>
                </form>
            </div>
        </div>
    )
}