import { useState } from "react"
import { Link } from "react-router-dom"

export default function Register() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')

    const submitRegister = (e) => {
        e.preventDefault();
        console.log(username, password, firstName, lastName)
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
                    <input type="text"
                    placeholder="username"
                        onChange={(e) => setUsername(e.target.value)}
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