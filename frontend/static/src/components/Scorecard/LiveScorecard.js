import Table from 'react-bootstrap/Table';
import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import { handleError } from "../../utils/helpers";

import { useParams } from 'react-router-dom';
function Livescorecard(props) {

  const course = useState("");
  const players = useState([]);
  const date = useState("");
  const {hole} = useParams();

  const [scoreData, setScoreData] = useState();
  const { userDetails, setUserDetails, scorecard } = props;
  console.log(scorecard)
  console.log(props)

// useEffect(() => {
//   fetch("/api/v1/scorecards/holes/")
//   .then((response) => response.json())
//   .then((item) => )
// })


  const holeData = (data) => {
    const totalHoles = scoreData.length;
    data.id = totalHoles + 1;
    const updatedScoreData = [...scoreData];
    updatedScoreData.push(data);
    setScoreData(updatedScoreData);
  };

  
  return (
    <div className="container-table">
      <Table responsive striped="columns">
        <thead>
          <tr>
            <th scope="row">Hole</th>
            <th scope="col">1</th>
            <th scope="col">2</th>
            <th scope="col">3</th>
            <th scope="col">4</th>
            <th scope="col">5</th>
            <th scope="col">6</th>
            <th scope="col">7</th>
            <th scope="col">8</th>
            <th scope="col">9</th>
            <th scope="col">10</th>
            <th scope="col">11</th>
            <th scope="col">12</th>
            <th scope="col">13</th>
            <th scope="col">14</th>
            <th scope="col">15</th>
            <th scope="col">16</th>
            <th scope="col">17</th>
            <th scope="col">18</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">PAR</th>
            <td>{scorecard?.hole1?.par}</td>
            <td>{scorecard?.hole2?.par}</td>
            <td>{scorecard?.hole3?.par}</td>
            <td>{scorecard?.hole4?.par}</td>
            <td>{scorecard?.hole5?.par}</td>
            <td>{scorecard?.hole6?.par}</td>
            <td>{scorecard?.hole7?.par}</td>
            <td>{scorecard?.hole8?.par}</td>
            <td>{scorecard?.hole9?.par}</td>
            <td>{scorecard?.hole10?.par}</td>
            <td>{scorecard?.hole11?.par}</td>
            <td>{scorecard?.hole12?.par}</td>
            <td>{scorecard?.hole13?.par}</td>
            <td>{scorecard?.hole14?.par}</td>
            <td>{scorecard?.hole15?.par}</td>
            <td>{scorecard?.hole16?.par}</td>
            <td>{scorecard?.hole17?.par}</td>
            <td>{scorecard?.hole18?.par}</td>
          </tr>
          <tr>
          <th scope="row">DISTANCE</th>
            <td>{scorecard?.hole1?.distance}</td>
            <td>{scorecard?.hole2?.distance}</td>
            <td>{scorecard?.hole3?.distance}</td>
            <td>{scorecard?.hole4?.distance}</td>
            <td>{scorecard?.hole5?.distance}</td>
            <td>{scorecard?.hole6?.distance}</td>
            <td>{scorecard?.hole7?.distance}</td>
            <td>{scorecard?.hole8?.distance}</td>
            <td>{scorecard?.hole9?.distance}</td>
            <td>{scorecard?.hole10?.distance}</td>
            <td>{scorecard?.hole11?.distance}</td>
            <td>{scorecard?.hole12?.distance}</td>
            <td>{scorecard?.hole13?.distance}</td>
            <td>{scorecard?.hole14?.distance}</td>
            <td>{scorecard?.hole15?.distance}</td>
            <td>{scorecard?.hole16?.distance}</td>
            <td>{scorecard?.hole17?.distance}</td>
            <td>{scorecard?.hole18?.distance}</td>
          </tr>
          <tr>
          <th scope="row">{userDetails && userDetails.username}</th>
            <td>{scorecard?.hole1?.score}</td>
            <td>{scorecard?.hole2?.score}</td>
            <td>{scorecard?.hole3?.score}</td>
            <td>{scorecard?.hole4?.score}</td>
            <td>{scorecard?.hole5?.score}</td>
            <td>{scorecard?.hole6?.score}</td>
            <td>{scorecard?.hole7?.score}</td>
            <td>{scorecard?.hole8?.score}</td>
            <td>{scorecard?.hole9?.score}</td>
            <td>{scorecard?.hole10?.score}</td>
            <td>{scorecard?.hole11?.score}</td>
            <td>{scorecard?.hole12?.score}</td>
            <td>{scorecard?.hole13?.score}</td>
            <td>{scorecard?.hole14?.score}</td>
            <td>{scorecard?.hole15?.score}</td>
            <td>{scorecard?.hole16?.score}</td>
            <td>{scorecard?.hole17?.score}</td>
            <td>{scorecard?.hole18?.score}</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );

};
{/* <Table responsive="sm">
<thead>
  <tr>HOLE</tr>
  <tr>DISTANCE</tr>
  <tr>Par</tr>
  <tr>{userDetails && userDetails.username}</tr>
</thead>
<tbody>{tableColumns}</tbody>
</Table> */}

  //   <Table responsive="md">
  //     <thead>
  //       <tr className='table-hole'>
  //         <th>Hole</th>
  //         {Array.from({ length: 18 }).map((_, index) => (
  //           <th key={index + 1}>{"0"}</th>
  //         ))}
  //       </tr>
  //     </thead>
  //     <tbody>
  //       <tr className='table-distance'>
  //         <td>Distance</td>
  //         {Array.from({ length: 18 }).map((_, index) => (
  //           <td key={index}>Table cell {index}</td>
  //         ))}
  //       </tr>
  //       <tr className='table-par'>
  //         <td>Par</td>
  //         {Array.from({ length: 18 }).map((_, index) => (
  //           <td key={index}>Table cell {index}</td>
  //         ))}
  //       </tr>
  //       <tr className='table-strokes'>
  //         <td>Score</td>
  //         {Array.from({ length: 18 }).map((_, index) => (
  //           <td key={index}>Table cell {index}</td>
  //         ))}
  //       </tr>
  //     </tbody>
  //   </Table>
  // );
// }

export default Livescorecard;