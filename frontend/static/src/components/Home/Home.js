import Nav from "react-bootstrap/Nav";
import FeatureCardLogo from "../Images/FeatureCardlogo.png";

function Home() {
    return (
        <main>
            <div className="home-container">
                <img className="fclogo" src={FeatureCardLogo} alt="home-pic" />
            </div>
            <div className="home-buttons">
                <Nav.Link className="login-form btn-hover" href="/login">Player Login</Nav.Link>
            </div>
        </main>
    );
}

export default Home;