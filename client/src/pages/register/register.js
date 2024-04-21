import { useState } from "react"

export default function Register() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const submitRegister = () => {
        console.log('hey')
    }

    return (
        <div className="form-container">
            <form>
                <input type="text"></input>
                <input type="text"></input>
                <button type="submit" onClick={submitRegister}></button>
            </form>
        </div>)
}