import React, { useState, useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Form from 'react-bootstrap/Form';
import '../../styles/LiveHolesScorecard.css';
import Cookies from 'js-cookie';
import { handleError } from "../../utils/helpers";
import Button from 'react-bootstrap/Button';
import LiveScorecard from './LiveScorecard';
import { useParams } from 'react-router-dom';

const initialState = Array.from({length: 18}).map((item,index) => (
  {name: `hole${index + 1}`, par: "", distance: "", score: ""}
));

function LiveHolesScorecard(props) {
  const [index, setIndex] = useState(0);
  // const [count, setCount] = useState(0);


  // {
  //   course: 'djfldkfj',
  //   date: 'dakfjaldkf',
  //   players: ['1', '2']
  //   : [{}, {}]
  // }
  // Values for table
  const [scorecard, setScorecard] = useState(initialState);
  
  const [number, setNumber] = useState([]);
  const [par, setPar] = useState([]);
  const [distance, setDistance] = useState([]);
  const [player, setPlayer] = useState([]);
  const {hole, scorecards} = useParams();


  useEffect(() => {
    
    fetch("/api/v1/scorecards/")
    .then((response) => response.json())
    .then((item) => setScorecard(item));
  }, [scorecard]);

  const [score, setScore] = useState(initialState);



  const handleChange = (e) => {
    const { name, id, value }  = e.target;
    setScorecard(scorecard.map(card => {
      if (card.name === name){
        return {
          ...card,
          [id]: value,
        }
      } else return card;
    }))
  };

// Plus and Minus Buttons
  const IncrementCount = () => {
    setScore(score => score + 1);
  };

  const DecrementCount = () => {
    if (score > 0) {
    setScore(score => score - 1);
  }
  };

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };


  const { userDetails, setUserDetails } = props;

// Fetch request to holes endpoint
    const saveHoleData = async (e) => {
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          number: 1,
          par: 3,
          distance: 300,
          score: 3,
          player: 2,
          scorecard: 4
        })
      };
      
      const response = await fetch("/api/v1/scorecards/", options).catch(handleError);
      if (!response.ok) {
        throw new Error("Network response was not OK");
      } else {
        const data = await response.json();

      }
  
    };

    // console.log({score})


    const carouselItems = Array.from({length: 18}).map((item, index) => (
      
      <Carousel.Item key={index} >
        <Form>
          <Form.Group className="md-4" controlId={index}>
            <h2>Hole {index + 1}</h2>
            <p>Par <input type="number" id="par" name={`hole${index + 1}`} required min="3" max="5" onChange={handleChange}></input></p>
            <p> <input type="number" id="distance" name="hole-distance" required onChange={handleChange}></input> ft</p>
            <h2 className="username">{userDetails && userDetails.username} <Button className="control__btn" onClick={DecrementCount}>-</Button><span className="counter__output" type="number" id="score" onChange={handleChange}></span> 10 <Button className="control__btn" onClick={IncrementCount}>+</Button></h2>
          </Form.Group>
        </Form>
      </Carousel.Item>
    ));

    // console.log({carouselItems})


    return (
    <>
    <Carousel activeIndex={index} interval={null} variant="dark" onSelect={handleSelect} >
      {carouselItems}
      {/*<Carousel.Item><LiveScorecard scorecard={scorecard}/></Carousel.Item>*/}
    </Carousel>
    <Button className="save-button" type="button" onClick={saveHoleData}>Save score</Button>
    </>
  );
}

export default LiveHolesScorecard;




