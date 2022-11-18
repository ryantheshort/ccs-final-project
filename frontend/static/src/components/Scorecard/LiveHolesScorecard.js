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
  {name: `hole${index + 1}`, par: "", distance: "", score: "", }
));

function Player({player}) {
  
  const [index, setIndex] = useState(0);
  const {holeID, scorecardID} = useParams();
  const [hole, setHole] = useState({
    number: holeID,
    par: '',
    distance: '',
    score: 0,
    player: 1,
    scorecard: scorecardID
  })

  const IncrementCount = () => {
    // setScore(score => score + 1);
    setHole((prevState) => ({
      ...prevState,
      score: prevState.score + 1,
    }))
  };

  const DecrementCount = () => {
    if (hole.score > 0) {
    // setScore(score => score - 1);
    setHole((prevState) => ({
      ...prevState,
      score: prevState.score - 1,
    }))
  }
  };
  const handleChange = (e) => {
    let { name, value, type }  = e.target;


    if(type === "number") {
      value = parseInt(value);
    }

    setHole((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  };

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return(<div className="player-text">{player.username} <Button className="control__btn" onClick={DecrementCount}>-</Button><span className="counter__output" type="number" id="score" onChange={handleChange}></span> {hole.score} <Button className="control__btn" onClick={IncrementCount}>+</Button></div>)
}

function LiveHolesScorecard(props) {
  const [index, setIndex] = useState(0);
  // const [count, setCount] = useState(0);
  
  // Values for table
  const [scorecard, setScorecard] = useState(initialState);
  const {holeID, scorecardID} = useParams();
  const [hole, setHole] = useState({
    number: holeID,
    par: '',
    distance: '',
    score: 0,
    player: 1,
    scorecard: scorecardID
  })
  
  // const [number, setNumber] = useState([]);
  // const [par, setPar] = useState([]);
  // const [distance, setDistance] = useState([]);
  const [player, setPlayer] = useState([]);

  //Fetch request for HoleID
  useEffect(() => {
    fetch(`/api/v1/scorecards/${scorecardID}/`)
      .then((response) => response.json())
      .then((item) => {
        const holes  = item.holes;
        // setHoles(holes);
      });
  }, []);


  
// Fetch Request for scorecardID
  useEffect(() => {
    
    fetch(`/api/v1/scorecards/${scorecardID}/`)
    .then((response) => response.json())
    .then((item) => setScorecard(item));
  }, []);

  const [score, setScore] = useState(0);



  const handleChange = (e) => {
    let { name, value, type }  = e.target;


    if(type === "number") {
      value = parseInt(value);
    }

    setHole((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  };


  

// Plus and Minus Buttons
  const IncrementCount = () => {
    // setScore(score => score + 1);
    setHole((prevState) => ({
      ...prevState,
      score: prevState.score + 1,
    }))
  };

  const DecrementCount = () => {
    if (hole.score > 0) {
    // setScore(score => score - 1);
    setHole((prevState) => ({
      ...prevState,
      score: prevState.score - 1,
    }))
  }
  };

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  

// Fetch request to holes endpoint
    const saveHoleData = async (e) => {
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-CSRFToken": Cookies.get("csrftoken"),
        },
        body: JSON.stringify(hole)
      };
      
      const response = await fetch(`/api/v1/scorecards/holes/`, options).catch(handleError);
      if (!response.ok) {
        throw new Error("Network response was not OK");
      } else {
        const data = await response.json();
        
      }
  
    };

    // Post request to implement current players

    // const setPlayers = async (e) => {
    //   e.preventDefault();
    //   const options = {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //       "X-CSRFToken": Cookies.get("csrftoken"),
    //     },
    //     body: JSON.stringify({
    //       players
    //     }),
    //   };
    //   const response = await fetch("/api/v1/scorecards/", options).catch(
    //     handleError
    //   );
    //   if (!response.ok) {
    //     throw new Error("Network response was not OK");
    //   } else {
    //     const data = await response.json();
    //       navigate("")
    //   }
    // };
    // const cardPlayers = scorecardID?.map(user) => {
    //   return (
    //     <h2 key={user.id} value={user.id}>
    //       {user.username}
    //     </h2>
    //   )
    // };

    const playersHTML = scorecard.players_details?.map(player => (
      <Player key={player.id} player={player} />
    ));

    console.log(playersHTML);
    

    const carouselItems = Array.from({length: 18}).map((item, index) => (
      
      <Carousel.Item key={index} >
        <Form>
          <Form.Group className="md-4" controlId={index}>
            <h2 id="number" name="number">Hole {index + 1}</h2>
            <p>Par <input type="number" id="par" name="par" required min="3" max="5" onChange={handleChange}></input></p>
            <p> <input type="number" id="distance" name="distance" required onChange={handleChange}></input> ft</p>
            {playersHTML}
            <Button className="save-button" type="button" onClick={saveHoleData}>Save score</Button>
            {/* <h2 className="username" id="player" name="player"> <Button className="control__btn" onClick={DecrementCount}>-</Button><span className="counter__output" type="number" id="score" onChange={handleChange}></span> {hole.score} <Button className="control__btn" onClick={IncrementCount}>+</Button></h2> */}
          </Form.Group>
        </Form>
      </Carousel.Item>
    ));

    // console.log({carouselItems})


    return (
    <>
    <Carousel activeIndex={index} interval={null}  onSelect={handleSelect} >
      {carouselItems}
      
      {/*<Carousel.Item><LiveScorecard scorecard={scorecard}/></Carousel.Item>*/}
    </Carousel>
    
    
    </>
  );
}

export default LiveHolesScorecard;




