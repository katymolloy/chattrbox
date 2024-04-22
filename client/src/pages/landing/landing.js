import '../../styles/variables.scss'
import './landing.scss';

import Login from '../login/login';
import { Link } from 'react-router-dom';

export default function Landing() {
    return (
        <div className="container">
            <div className="glassPanel landing">
                <div className='landingHeader'>
                    <h1>chattrbox</h1>
                    <h2>Instant connection in your browser</h2>
                    <div className='headerTagline'>Login or sign up to get started</div>

                </div>
                <div className='signInOrRegister'>
                    <Login />
                    <div className='glassPanel signUpCta'>
                        Not yet a member?<br /> Sign up at the link below
                        <Link to={'/register'}><div className="button">SIGN UP</div></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}