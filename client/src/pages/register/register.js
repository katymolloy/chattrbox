import { useState } from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"

import { createUser } from "../../utilities/axios";

import '../../styles/variables.scss'


export default function Register() {
    const navigate = useNavigate();

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
  

    const submitRegister = (e) => {
        e.preventDefault();
        createUser(firstName, lastName, email, password)
        navigate('/home')
    }

    return (
        <div className="container">
            <div className="glassPanel">
                <Link to={'/'}>home</Link>
                <form>
                <input type="text"
                    placeholder="first name"
                        onChange={(e) => setFirstName(e.target.value)}
                    ></input>
                     <input type="text"
                    placeholder="last name"
                        onChange={(e) => setLastName(e.target.value)}
                    ></input>
                    <input type="email"
                    placeholder="email"
                        onChange={(e) => setEmail(e.target.value)}
                    ></input>
                    <input type="text"
                    placeholder="password"
                        onChange={(e) => setPassword(e.target.value)}
                    ></input>
              <div className="button" onClick={submitRegister}>sign up</div>
                </form>
            </div>
        </div>)
}