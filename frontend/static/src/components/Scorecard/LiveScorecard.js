import Table from 'react-bootstrap/Table';
import React, { useState } from 'react';
import jsonData from './data.json';
import Cookies from 'js-cookie';
import { handleError } from "../../utils/helpers";
import '../../styles/LiveHolesScorecard.css';

function LiveScorecard(props) {

  const [scoreData, setScoreData] = useState(jsonData);



  const tableColumns = scoreData.map((info) => {
    console.log(info)
    return (
      <tr>
        <td>{info.id}</td>
        <td>{info.distance}</td>
        <td>{info.par}</td>
        <td>{info.score}</td>
      </tr>
    );
  });

  const { userDetails, setUserDetails, scorecard } = props;

  console.log(scorecard)
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

  const addColumns = (data) => {
    const totalHoles = scoreData.length;
    data.id = totalHoles + 1;
    const updatedScoreData = [...scoreData];
    updatedScoreData.push(data);
    setScoreData(updatedScoreData);
  };

  return (
    <div>
<table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Par</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Hole 1</th>
      <td>{scorecard.hole1.par}</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
   
    </div>
  );
}

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

export default LiveScorecard;