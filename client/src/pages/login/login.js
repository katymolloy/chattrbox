import { useState } from "react"
import '../../styles/variables.scss'
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"

export default function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate();

    const submitLogin = () => {
        console.log(username, password)
        navigate('/home')
    }

    return (
        <div className="container">
            <div className="glassPanel">
                <Link to={'/'}>home</Link>
                <form>
                <input type="text"
                    placeholder="username"
                        onChange={(e) => setUsername(e.target.value)}
                    ></input>
                    <input type="text"
                    placeholder="password"
                        onChange={(e) => setPassword(e.target.value)}
                    ></input>
                   <div className="button" onClick={submitLogin}>sign in</div>
                </form>
            </div>
        </div>)
}