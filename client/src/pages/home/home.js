import { useState } from "react"
import './home.scss';
import { Link } from "react-router-dom";

export default function Home() {
    const [name, setName] = useState('')
    const [user, setUser] = useState('')


    return (
        <div className="container">
            <div className="glassPanel home">
                <div className="homeHeader">
                    <h1>Hey there, {name}</h1>
                    <Link to={'/'}><div className="button">SIGN OUT</div></Link>
                </div>

                <div className="chatBox">
                    <div className="allFriends">
                        <label>Online</label>
                        <ul className="onlineFriends">
                            <li>folrof</li>
                            <li>folrof</li>
                            <li>folrof</li>
                            <li>folrof</li>
                            <li>folrof</li>

                        </ul>
                        <label>Offline</label>
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