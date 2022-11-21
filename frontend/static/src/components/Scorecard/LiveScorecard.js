import Table from 'react-bootstrap/Table';
import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import { handleError } from "../../utils/helpers";
import '../../styles/LiveScorecard.css';
import { useParams } from 'react-router-dom';
function Livescorecard(props) {

  const course = useState();
  const players = useState([]);
  const date = useState("");
  const {holeID, scorecardID} = useParams();
  const [hole, setHole] = useState();
  const {par, setPar} = useState([]);
  const { userDetails, setUserDetails } = props;
  const [scorecard, setScorecard] = useState();
  
  const [info, setInfo] = useState(null);

// useEffect(() => {
//   fetch(`/api/v1/scorecards/${holeID}`)
//   .then((response) => response.json())
  
//   .then((data => setScorecard(data)))
// })

// useEffect(() => {
//   fetch(`/api/v1/scorecards/${holeID}`)
//     .then(response => {
//       return response.json();
//     })
//     .then((data) => {
      
      
//     })
//     const [scoreData] = data.hole;
// }, []);

useEffect(() => {
  fetch(`/api/v1/scorecards/${holeID}`)
    .then(response => {
      return response.json();
    })
    .then((data) => {
     setScorecard();
    
    })
}, []);


  // const holeData = (data) => {
  //   const totalHoles = scoreData.length;
  //   data.id = totalHoles + 1;
  //   const updatedScoreData = [...scoreData];
  //   updatedScoreData.push(data);
  //   setScoreData(updatedScoreData);
  // };
//   const myClasses = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '15', '16', '17', '18']
//   const rows = ['hole', 'par', 'distance','player1Score', 'player2Score', 'player3Score', 'player4Score']

// // Select the DIV table container
//   const tableContainer = document.querySelector('#table');

// // Create the table elements
//   const table = document.createElement('table');
//   const headerContainter = document.createElement('thead');
//   const headerRow = document.createElement('tr');
    
  return (
    
   

    // headers.forEach(headerText => {
    //    let header = document.createElement('th');
    //    myClasses.forEach(className => header.classList.add(className));
    //    let textNode = document.createTextNode(headerText);          
    //    header.appendChild(textNode);
    //    headerRow.appendChild(header);
    // });
    <div className="table-container">
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
            <th scope="col">TOTAL</th>
          </tr>
        </thead>
        <tbody id="data-output">
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
          <th scope="row">{userDetails && userDetails.username}Player1:</th>
            <td>{scorecard?.hole1?.player1Score}</td>
            <td>{scorecard?.hole2?.player1Score}</td>
            <td>{scorecard?.hole3?.player1Score}</td>
            <td>{scorecard?.hole4?.player1Score}</td>
            <td>{scorecard?.hole5?.player1Score}</td>
            <td>{scorecard?.hole6?.player1Score}</td>
            <td>{scorecard?.hole7?.player1Score}</td>
            <td>{scorecard?.hole8?.player1Score}</td>
            <td>{scorecard?.hole9?.player1Score}</td>
            <td>{scorecard?.hole10?.player1Score}</td>
            <td>{scorecard?.hole11?.player1Score}</td>
            <td>{scorecard?.hole12?.player1Score}</td>
            <td>{scorecard?.hole13?.player1Score}</td>
            <td>{scorecard?.hole14?.player1Score}</td>
            <td>{scorecard?.hole15?.player1Score}</td>
            <td>{scorecard?.hole16?.player1Score}</td>
            <td>{scorecard?.hole17?.player1Score}</td>
            <td>{scorecard?.hole18?.player1Score}</td>
          </tr>
          <tr>
          <th scope="row">{userDetails && userDetails.username}Player2:</th>
            <td>{scorecard?.hole1?.player2Score}</td>
            <td>{scorecard?.hole2?.player2Score}</td>
            <td>{scorecard?.hole3?.player2Score}</td>
            <td>{scorecard?.hole4?.player2Score}</td>
            <td>{scorecard?.hole5?.player2Score}</td>
            <td>{scorecard?.hole6?.player2Score}</td>
            <td>{scorecard?.hole7?.player2Score}</td>
            <td>{scorecard?.hole8?.player2Score}</td>
            <td>{scorecard?.hole9?.player2Score}</td>
            <td>{scorecard?.hole10?.player2Score}</td>
            <td>{scorecard?.hole11?.player2Score}</td>
            <td>{scorecard?.hole12?.player2Score}</td>
            <td>{scorecard?.hole13?.player2Score}</td>
            <td>{scorecard?.hole14?.player2Score}</td>
            <td>{scorecard?.hole15?.player2Score}</td>
            <td>{scorecard?.hole16?.player2Score}</td>
            <td>{scorecard?.hole17?.player2Score}</td>
            <td>{scorecard?.hole18?.player2Score}</td>
          </tr>
        </tbody> */
      </Table>
      </div>
   
    
  );

};
//  <Table responsive="sm">
// <thead>
//   <tr>HOLE</tr>
//   <tr>DISTANCE</tr>
//   <tr>Par</tr>
//   <tr>{userDetails && userDetails.username}</tr>
// </thead>
// <tbody>{tableColumns}</tbody>
// </Table> 
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