import '../../variables.scss';
import { Link } from 'react-router-dom';

export default function Landing() {
    return (
        <div className="container">
            <div className="glassPanel">
                <h1>chattrbox</h1>
                <h2>instant connection in your browser</h2>
                <div>login or sign up to get started</div>
                <Link to={'/login'}><div className="cta-button">login</div></Link>
                <Link to={'/register'}><div className="cta-button">sign up</div></Link>
            </div>
        </div>
    )
}