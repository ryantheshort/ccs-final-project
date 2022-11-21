import React, { useState, useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
import Form from "react-bootstrap/Form";
import "../../styles/LiveHolesScorecard.css";
import Cookies from "js-cookie";
import { handleError } from "../../utils/helpers";
import Button from "react-bootstrap/Button";
import LiveScorecard from "./LiveScorecard";
import { useParams } from "react-router-dom";

const initialState = Array.from({ length: 18 }).map((item, index) => ({
  name: `hole${index + 1}`,
  par: "",
  distance: "",
  score: "",
  players: 1,
}));

function Player({ player }) {
  const [index, setIndex] = useState(0);
  const { holeID, scorecardID } = useParams();
  const [hole, setHole] = useState({
    number: holeID,
    par: "",
    distance: "",
    score: 0,
    player: 1,
    scorecard: scorecardID,
  });

  const IncrementCount = () => {
    // setScore(score => score + 1);
    setHole((prevState) => ({
      ...prevState,
      score: prevState.score + 1,
    }));
  };

  const DecrementCount = () => {
    if (hole.score > 0) {
      // setScore(score => score - 1);
      setHole((prevState) => ({
        ...prevState,
        score: prevState.score - 1,
      }));
    }
  };
  const handleChange = (e) => {
    let { name, value, type } = e.target;


    if (type === "number") {
      value = parseInt(value);
    }

    setHole((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <p className="player-text">
      {player.username}{" "}
      <Button className="control__btn" onClick={DecrementCount}>
        -
      </Button>
      <span
        className="counter__output"
        type="number"
        id="score"
        onChange={handleChange}
      ></span>{" "}
      {hole.score}{" "}
      <Button className="control__btn" onClick={IncrementCount}>
        +
      </Button>
    </p>
  );
}

function LiveHolesScorecard(props) {
  const [index, setIndex] = useState(0);
  // const [count, setCount] = useState(0);

  // Values for table
  const [scorecard, setScorecard] = useState(initialState);
  const [players, setPlayers] = useState();
  const { holeID, scorecardID } = useParams();

  const [hole, setHole] = useState({
    scorecard: holeID,
    hole: null, 
    number: 1,
    par: "",
    distance: "",
    player1Score: 0, 
    player2Score: 0, 
    player3Score: 0, 
    player4Score: 0, 
    score: 0,
    player: 1,
  });

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`/api/v1/scorecards/${holeID}`);
      if (!response.ok) {
        throw new Error("Network response was not OK");
      } else {
        const data = await response.json();
        setPlayers(data.players_details);
       
      }
    }
    fetchData();
  }, []);

  const [player, setPlayer] = useState([]);

  const [score, setScore] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const handleChange = (e) => {
    let { name, value, type, id } = e.target;
    console.log(id)


    if (type === "number") {
      value = parseInt(value);
    }

    setHole((prevState) => ({
      ...prevState,
      [name]: value,
      hole: id
    }));
  };

  const IncrementCount = (e) => {
    // setScore(score => score + 1);
    setHole((prevState) => ({
      ...prevState,
      [e.target.name]: prevState[e.target.name] + 1,      
    }));
  };

  const DecrementCount = (e) => {
    if (hole[e.target.name] > 0) {
      // setScore(score => score - 1);
      setHole((prevState) => ({
        ...prevState,
        [e.target.name]: prevState[e.target.name] - 1,
      }));
    }
  };

  // Fetch request to holes endpoint
  const saveHoleData = async (e) => {
    console.log(hole)
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-CSRFToken": Cookies.get("csrftoken"),
      },
      body: JSON.stringify(hole),
    };

    const response = await fetch(`/api/v1/scorecards/holes/`, options).catch(
      handleError
    );
    if (!response.ok) {
      throw new Error("Network response was not OK");
    } else {
      const data = await response.json();
    }
  };

  const playersHTML = scorecard.map((player) => (
    <Player key={player.id} player={player} />
  ));


  const scoreInputs = players?.map((player, index) => (
    <p className="player-text">
      {player.username}
      <Button className="control__btn" id={player.id} name={`player${index + 1}Score`} onClick={DecrementCount}>
        -
      </Button>
      <span
        className="counter__output"
        type="number"
        id={`player${index + 1}Score`}
        name={`player${index + 1}Score`}
        onChange={handleChange}
      ></span>
      {index === 0 && hole.player1Score} {index ===  1 && hole.player2Score}
      <Button className="control__btn" id={player.id} name={`player${index + 1}Score`} onClick={IncrementCount}>
        +
      </Button>
    </p>
  ));

  const carouselItems = Array.from({ length: 18 }).map((item, index) => (
    <Carousel.Item key={index}>
      <Form>
        <Form.Group className="md-4" controlId={index}>
          <h2 id="number" name="number">
            Hole {index + 1}
          </h2>
          <p>
            Par{" "}
            <input
              type="number"
              id={index + 1}
              name="par"
              required
              min="3"
              max="5"
              onChange={handleChange}
            ></input>
          </p>
          <p>
            {" "}
            <input
              type="number"
              id={index + 1}
              name="distance"
              required
              onChange={handleChange}
            ></input>{" "}
            ft
          </p>
          {scoreInputs}
          {/* <p>{playersHTML}</p> */}
          <Button className="save-button" type="button" onClick={saveHoleData}>
            Save Score
          </Button>
        </Form.Group>
      </Form>
    </Carousel.Item>
  ));
 
  // console.log({carouselItems})

  return (
    <>
      <Carousel activeIndex={index} interval={null} onSelect={handleSelect}>
        {carouselItems}

        <Carousel.Item>
          <LiveScorecard scorecard={scorecard} />
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default LiveHolesScorecard;
