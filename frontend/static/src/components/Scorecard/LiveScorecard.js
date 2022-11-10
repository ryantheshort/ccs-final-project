import Table from 'react-bootstrap/Table';
import React, { useState } from 'react';
import LiveHolesScorecard from './LiveHolesScorecard';
import jsonData from './data.json';
import Cookies from 'js-cookie';
import { handleError } from "../../utils/helpers";
import '../../styles/LiveHolesScorecard.css';

function LiveScorecard(props) {

  const [scoreData, setScoreData] = useState(jsonData);

  const tableColumns = scoreData.map((info) => {
    return (
      <tr>
        <td>{info.id}</td>
        <td>{info.distance}</td>
        <td>{info.par}</td>
        <td>{info.score}</td>
      </tr>
    );
  });

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

  const addColumns = (data) => {
    const totalHoles = scoreData.length;
    data.id = totalHoles + 1;
    const updatedScoreData = [...scoreData];
    updatedScoreData.push(data);
    setScoreData(updatedScoreData);
  };

  return (
    <div>
    <Table responsive="sm">
      <thead>
        <tr>HOLE</tr>
        <tr>DISTANCE</tr>
        <tr>Par</tr>
        <tr>{userDetails && userDetails.username}</tr>
      </thead>
      <tbody>{tableColumns}</tbody>
    </Table>
   
    </div>
  );
}



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