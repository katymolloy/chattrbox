import { useState } from "react"
import '../../styles/variables.scss'
import './login.scss'
import { useNavigate } from "react-router-dom"
import { FaLock } from "react-icons/fa6";
import { FaUser } from "react-icons/fa6";

export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate();

    const submitLogin = () => {
        console.log(email, password)
        navigate('/home')
    }

    return (
        <div className="glassPanel login">
            <form>
                <div>
                    <FaUser color="rgba(0, 0, 0, 0.2)" /> <input type="text"
                        placeholder="Email"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div>
                    <FaLock  color="rgba(0, 0, 0, 0.2)" /><input type="text"
                        placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className="button" onClick={submitLogin}>SIGN IN</div>
            </form>
        </div>
    )
}