import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Form from 'react-bootstrap/Form';
import '../../styles/LiveHolesScorecard.css';
import Cookies from 'js-cookie';
import { handleError } from "../../utils/helpers";
import Button from 'react-bootstrap/Button';
import LiveScorecard from './LiveScorecard';

// function LiveHolesScorecard(props) {







function LiveHolesScorecard(props) {
  const [index, setIndex] = useState(0);
  const [count, setCount] = useState(0);

  // Values for table
  const [par, setPar] = useState('');
  const [distance, setDistance] = useState('');
  const [score, setScore] = useState('');

  const changePar = (e) => {
    setPar(e.target.value);
  };
  const changeDistance = (e) => {
    setDistance(e.target.value);
  };
  const changeScore = (e) => {
    setScore(e.target.value);
  };
  const transferValue = (e) => {
    e.preventDefault();
    const val = {
      par,
      distance,
      score,
    };
    props.func(val);
  };

  // const clearState = () => {
  //   setPar('');
  //   setDistance('');
  //   setScore('');
  // };

// Plus and Minus Buttons
  const IncrementCount = () => {
    setCount(count => count + 1);
  };

  const DecrementCount = () => {
    if (count > 0) {
    setCount(count => count - 1);
  }
  };

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };


  const { userDetails, setUserDetails } = props;

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

    const carouselItems = Array.from({length: 18}).map((item, index) => (
      <Carousel.Item>
        <Form>
          <Form.Group className="md-4" controlId={index}>
            <h2>Hole {index + 1}</h2>
            <p>Par <input type="number" id="par" name="par-number" required min="3" max="5" value={par} onChange={changePar}></input></p>
            <p> <input type="number" id="distance" name="hole-distance" required value={distance} onChange={changeDistance}></input>ft</p>
            <h2 className="username">{userDetails && userDetails.username} <Button className="control__btn" onClick={DecrementCount}>-</Button><span className="counter__output" type="number"  value={score} onChange={changeScore}> {count} </span><Button className="control__btn" onClick={IncrementCount}>+</Button></h2>
            <button onClick={transferValue}> Submit</button>
          </Form.Group>
        </Form>
      </Carousel.Item>
    ));

    console.log({carouselItems})

    return (
    <Carousel activeIndex={index} interval={null} variant="dark" onSelect={handleSelect} >
      {carouselItems}
      <Carousel.Item><LiveScorecard/></Carousel.Item>
    </Carousel>
  );
}

export default LiveHolesScorecard;




