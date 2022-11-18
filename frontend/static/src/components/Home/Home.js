import Nav from "react-bootstrap/Nav";

import "../../styles/Home.css";

function Home() {
    return (
        <main className="home-page">
            
            
            <div className="home-buttons">
                <Nav.Link className="login-form btn-hover" href="/login">Player Login</Nav.Link>
            </div>
        </main>
    );
}

export default Home