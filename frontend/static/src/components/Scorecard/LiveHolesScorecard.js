import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Form from 'react-bootstrap/Form';
import '../../styles/LiveHolesScorecard.css';
import Cookies from 'js-cookie';
import { handleError } from "../../utils/helpers";

function LiveHolesScorecard(props) {
  const [index, setIndex] = useState(0);
 
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const { userDetails, setUserDetails } = props;
  // const [sidebar, setSidebar] = useState(false);
  const [show, setShow] = useState(false);



  // Toggles the navigation menu
  // const showSidebar = () => setSidebar(!sidebar);

  // Locks scrolling when the navigation menu is active


    const handleLogout = async (e) => {
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-CSRFToken": Cookies.get("csrftoken"),
        },
      };
      
      const response = await fetch("/dj-rest-auth/logout/", options).catch(handleError);
      if (!response.ok) {
        throw new Error("Network response was not OK");
      } else {
        const data = await response.json();
        Cookies.remove("Authorization");
        localStorage.removeItem('username');
        setUserDetails({
          isAuth: false,
          username: null
        });
       
      }
  
    };

  return (
    <Carousel activeIndex={index} interval={null} variant="dark" onSelect={handleSelect} >
{/* HOLE 1 */}
      <Carousel.Item>
        <Form>
          <Form.Group className="md-4" controlId={index}>
            <h2>Hole {index + 1}</h2>
            <p>Par <input type="number" id="par" name="par-number" required min="3" max="5"></input></p>
            <p> <input type="number" id="distance" name="hole-distance" required></input>ft</p>
            <h2 className="username">{userDetails && userDetails.username}</h2>
          </Form.Group>
        </Form>
      </Carousel.Item>
{/* HOLE 2 */}
      <Carousel.Item>
        <Form>
          <Form.Group className="md-4" controlId={index}>
            <h2>Hole {index + 1}</h2>
            <p>Par <input type="number" id="par" name="par-number" required min="3" max="5"></input></p>
            <p> <input type="number" id="distance" name="hole-distance" required></input>ft</p>
            <h2 className="username">{userDetails && userDetails.username}</h2>
          </Form.Group>
          </Form>
      </Carousel.Item>
{/* HOLE 3 */}
      <Carousel.Item>
        <Form>
          <Form.Group className="md-4" controlId={index}>
            <h2>Hole {index + 1}</h2>
            <p>Par <input type="number" id="par" name="par-number" required min="3" max="5"></input></p>
            <p> <input type="number" id="distance" name="hole-distance" required></input>ft</p>
            <h2 className="username">{userDetails && userDetails.username}</h2>
          </Form.Group>
        </Form>
      </Carousel.Item>
{/* HOLE 4 */}
<Carousel.Item>
        <Form>
          <Form.Group className="md-4" controlId={index}>
            <h2>Hole {index + 1}</h2>
            <p>Par <input type="number" id="par" name="par-number" required min="3" max="5"></input></p>
            <p> <input type="number" id="distance" name="hole-distance" required></input>ft</p>
            <h2 className="username">{userDetails && userDetails.username}</h2>
          </Form.Group>
        </Form>
      </Carousel.Item>
{/* HOLE 4 */}
<Carousel.Item>
        <Form>
          <Form.Group className="md-4" controlId={index}>
            <h2>Hole {index + 1}</h2>
            <p>Par <input type="number" id="par" name="par-number" required min="3" max="5"></input></p>
            <p> <input type="number" id="distance" name="hole-distance" required></input>ft</p>
            <h2 className="username">{userDetails && userDetails.username}</h2>
          </Form.Group>
        </Form>
      </Carousel.Item>
{/* HOLE 5 */}
<Carousel.Item>
        <Form>
          <Form.Group className="md-4" controlId={index}>
            <h2>Hole {index + 1}</h2>
            <p>Par <input type="number" id="par" name="par-number" required min="3" max="5"></input></p>
            <p> <input type="number" id="distance" name="hole-distance" required></input>ft</p>
            <h2 className="username">{userDetails && userDetails.username}</h2>
          </Form.Group>
        </Form>
      </Carousel.Item>
{/* HOLE 6 */}
<Carousel.Item>
        <Form>
          <Form.Group className="md-4" controlId={index}>
            <h2>Hole {index + 1}</h2>
            <p>Par <input type="number" id="par" name="par-number" required min="3" max="5"></input></p>
            <p> <input type="number" id="distance" name="hole-distance" required></input>ft</p>
            <h2 className="username">{userDetails && userDetails.username}</h2>
          </Form.Group>
        </Form>
      </Carousel.Item>
{/* HOLE 7 */}
<Carousel.Item>
        <Form>
          <Form.Group className="md-4" controlId={index}>
            <h2>Hole {index + 1}</h2>
            <p>Par <input type="number" id="par" name="par-number" required min="3" max="5"></input></p>
            <p> <input type="number" id="distance" name="hole-distance" required></input>ft</p>
            <h2 className="username">{userDetails && userDetails.username}</h2>
          </Form.Group>
        </Form>
      </Carousel.Item>
{/* HOLE 8 */}
<Carousel.Item>
        <Form>
          <Form.Group className="md-4" controlId={index}>
            <h2>Hole {index + 1}</h2>
            <p>Par <input type="number" id="par" name="par-number" required min="3" max="5"></input></p>
            <p> <input type="number" id="distance" name="hole-distance" required></input>ft</p>
            <h2 className="username">{userDetails && userDetails.username}</h2>
          </Form.Group>
        </Form>
      </Carousel.Item>
{/* HOLE 9 */}
<Carousel.Item>
        <Form>
          <Form.Group className="md-4" controlId={index}>
            <h2>Hole {index + 1}</h2>
            <p>Par <input type="number" id="par" name="par-number" required min="3" max="5"></input></p>
            <p> <input type="number" id="distance" name="hole-distance" required></input>ft</p>
            <h2 className="username">{userDetails && userDetails.username}</h2>
          </Form.Group>
        </Form>
      </Carousel.Item>
{/* HOLE 10 */}
<Carousel.Item>
        <Form>
          <Form.Group className="md-4" controlId={index}>
            <h2>Hole {index + 1}</h2>
            <p>Par <input type="number" id="par" name="par-number" required min="3" max="5"></input></p>
            <p> <input type="number" id="distance" name="hole-distance" required></input>ft</p>
            <h2 className="username">{userDetails && userDetails.username}</h2>
          </Form.Group>
        </Form>
      </Carousel.Item>
{/* HOLE 11 */}
<Carousel.Item>
        <Form>
          <Form.Group className="md-4" controlId={index}>
            <h2>Hole {index + 1}</h2>
            <p>Par <input type="number" id="par" name="par-number" required min="3" max="5"></input></p>
            <p> <input type="number" id="distance" name="hole-distance" required></input>ft</p>
            <h2 className="username">{userDetails && userDetails.username}</h2>
          </Form.Group>
        </Form>
      </Carousel.Item>
{/* HOLE 12 */}
<Carousel.Item>
        <Form>
          <Form.Group className="md-4" controlId={index}>
            <h2>Hole {index + 1}</h2>
            <p>Par <input type="number" id="par" name="par-number" required min="3" max="5"></input></p>
            <p> <input type="number" id="distance" name="hole-distance" required></input>ft</p>
            <h2 className="username">{userDetails && userDetails.username}</h2>
          </Form.Group>
        </Form>
      </Carousel.Item>
{/* HOLE 13 */}
<Carousel.Item>
        <Form>
          <Form.Group className="md-4" controlId={index}>
            <h2>Hole {index + 1}</h2>
            <p>Par <input type="number" id="par" name="par-number" required min="3" max="5"></input></p>
            <p> <input type="number" id="distance" name="hole-distance" required></input>ft</p>
            <h2 className="username">{userDetails && userDetails.username}</h2>
          </Form.Group>
        </Form>
      </Carousel.Item>
{/* HOLE 14 */}
<Carousel.Item>
        <Form>
          <Form.Group className="md-4" controlId={index}>
            <h2>Hole {index + 1}</h2>
            <p>Par <input type="number" id="par" name="par-number" required min="3" max="5"></input></p>
            <p> <input type="number" id="distance" name="hole-distance" required></input>ft</p>
            <h2 className="username">{userDetails && userDetails.username}</h2>
          </Form.Group>
        </Form>
      </Carousel.Item>
{/* HOLE 15 */}
<Carousel.Item>
        <Form>
          <Form.Group className="md-4" controlId={index}>
            <h2>Hole {index + 1}</h2>
            <p>Par <input type="number" id="par" name="par-number" required min="3" max="5"></input></p>
            <p> <input type="number" id="distance" name="hole-distance" required></input>ft</p>
            <h2 className="username">{userDetails && userDetails.username}</h2>
          </Form.Group>
        </Form>
      </Carousel.Item>
{/* HOLE 16 */}
<Carousel.Item>
        <Form>
          <Form.Group className="md-4" controlId={index}>
            <h2>Hole {index + 1}</h2>
            <p>Par <input type="number" id="par" name="par-number" required min="3" max="5"></input></p>
            <p> <input type="number" id="distance" name="hole-distance" required></input>ft</p>
            <h2 className="username">{userDetails && userDetails.username}</h2>
          </Form.Group>
        </Form>
      </Carousel.Item>
{/* HOLE 17 */}
<Carousel.Item>
        <Form>
          <Form.Group className="md-4" controlId={index}>
            <h2>Hole {index + 1}</h2>
            <p>Par <input type="number" id="par" name="par-number" required min="3" max="5"></input></p>
            <p> <input type="number" id="distance" name="hole-distance" required></input>ft</p>
            <h2 className="username">{userDetails && userDetails.username}</h2>
          </Form.Group>
        </Form>
      </Carousel.Item>
{/* TOTAL SCORECARD */}
<Carousel.Item>

      </Carousel.Item>
    </Carousel>
  );
}

export default LiveHolesScorecard;