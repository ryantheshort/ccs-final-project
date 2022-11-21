import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import fcbar from '../Images/FCbar.png';
import "../../styles/Home.css";


function Home() {
    return (
        <main className="home-page">
            
            
            
            <div className="home-buttons">
                <Button className="home-login"><Nav.Link className="login-form btn-hover" href="/login">Player Login</Nav.Link></Button>
            </div>
            <div>
                <img className="bar-logo" src={fcbar} />
            </div>
            {/* <div><img className="basket-logo" src="" /> </div> */}
        </main>
    );
}

export default Home