import { useState } from "react"
import '../../styles/variables.scss'
import './login.scss'
import { signInUser } from "../../utilities/axios"
import { useNavigate } from "react-router-dom"
import { FaLock } from "react-icons/fa6";
import { FaUser } from "react-icons/fa6";

export default function Login({ onDataChange }) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errors, setErrors] = useState('')

    const navigate = useNavigate();
   
    const submitLogin = (e) => {
        e.preventDefault();
   
        signInUser(email, password, onDataChange)
            .then(res => {
                if (res.response === 'User is now logged in') {
                    // onDataChange(res.fname, res.user)
                    navigate('/home')
                } else {
                    setErrors(res)
                }
            })
    }

    return (
        <div className="glassPanel login">
            <form>

                <div className="errorBox">
                    {errors.length > 0 ?
                        <p>{errors}</p> :
                        <></>}
                </div>
                <div>
                    <FaUser color="rgba(0, 0, 0, 0.2)" /> <input type="text"
                        placeholder="Email"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div>
                    <FaLock color="rgba(0, 0, 0, 0.2)" /><input type="text"
                        placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className="button" onClick={submitLogin}>SIGN IN</div>
            </form>
        </div>
    )
}