import { useState } from "react"

export default function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const submitLogin = () => {
        console.log('hey')
    }

    return (
        <div className="form-container">
            <form>
                <input type="text"></input>
                <input type="text"></input>
                <button type="submit" onClick={submitLogin}></button>
            </form>
        </div>)
}