import Table from 'react-bootstrap/Table';
import { useNavigate, Link } from "react-router-dom";

function LiveScorecard() {
  return (
    <Table responsive>
      <thead>
        <tr className='table-hole'>
          <th>Hole</th>
          {Array.from({ length: 18 }).map((_, index) => (
            <th key={index}>Table heading</th>
          ))}
        </tr>
      </thead>
      <tbody>
        <tr className='table-distance'>
          <td>Distance</td>
          {Array.from({ length: 18 }).map((_, index) => (
            <td key={index}>Table cell {index}</td>
          ))}
        </tr>
        <tr className='table-par'>
          <td>Par</td>
          {Array.from({ length: 18 }).map((_, index) => (
            <td key={index}>Table cell {index}</td>
          ))}
        </tr>
        <tr className='table-players'>
          <td>Players</td>
          {Array.from({ length: 18 }).map((_, index) => (
            <td key={index}>Table cell {index}</td>
          ))}
        </tr>
      </tbody>
    </Table>
  );
}

export default LiveScorecard;