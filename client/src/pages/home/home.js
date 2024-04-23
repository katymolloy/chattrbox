import { useEffect, useState } from "react"
import './home.scss';
import { Link } from "react-router-dom";

export default function Home({currName, currUser}) {
    const [name, setName] = useState('')
    const [user, setUser] = useState('')
    useEffect(() => {
        setName(currName)
        setUser(currUser)
    })

    return (
        <div className="container">
            <div className="glassPanel home">
                <div className="homeHeader">
                    <h1>hey there, {name}</h1>
                    <Link to={'/'}>sign out</Link>
                </div>

                <div className="chatBox">
                    <div className="allFriends">
                        <label>online</label>
                        <ul className="onlineFriends">
                            <li>folrof</li>
                            <li>folrof</li>
                            <li>folrof</li>
                            <li>folrof</li>
                            <li>folrof</li>

                        </ul>
                        <label>offline</label>
                        <ul className="offlineFriends">
                            <li>ijbol</li>
                            <li>ijbol</li>

                            <li>ijbol</li>
                            <li>ijbol</li>

                        </ul>
                    </div>
                    <div className="lastChat">
                        <p>uhhhhhh filler text here flopfd sklafhjklsdfh

                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}