import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import { FaAngleLeft } from "react-icons/fa6";
import { createUser, getUsernames } from "../../utilities/axios";

import { FaLock } from "react-icons/fa6";
import { FaUser } from "react-icons/fa6";

import './register.scss'
import '../../styles/variables.scss'


export default function Register({ onDataChange }) {
    const navigate = useNavigate();

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [errors, setErrors] = useState('')




    const submitRegister = (e) => {
        e.preventDefault();
        createUser(firstName, lastName, email, password)
            .then(res => {
                if (res.response === 'User created') {
                    navigate('/home')
                } else {
                    setErrors(res.response.data.message)
                }
            })
    }

    return (
        <div className="container">
            <div className="glassPanel register">
                <Link to={'/'} className="backButton"><FaAngleLeft />Back</Link>
                <form>
                    <div className="registerTagline">Fill out the fields below to create an account.</div>
                    {errors.length > 0 ?
                        <p>{errors}</p> :
                        <></>}
                    <div>
                        <input type="text"
                            placeholder="First Name"
                            onChange={(e) => setFirstName(e.target.value)}
                        />
                    </div>
                    <div>
                        <input type="text"
                            placeholder="Last Name"
                            onChange={(e) => setLastName(e.target.value)}
                        /></div>

                    <div>
                        <FaUser color="rgba(0, 0, 0, 0.2)" /> <input type="text"
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