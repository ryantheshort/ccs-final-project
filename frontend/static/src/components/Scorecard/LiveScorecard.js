import Table from 'react-bootstrap/Table';


function LiveScorecard() {
  return (
    <Table responsive>
      <thead>
        <tr className='table-hole'>
          <th>Hole</th>
          {Array.from({ length: 18 }).map((_, index) => (
            <th key={index + 1}>{"0"}</th>
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
        <tr className='table-strokes'>
          <td>Score</td>
          {Array.from({ length: 18 }).map((_, index) => (
            <td key={index}>Table cell {index}</td>
          ))}
        </tr>
      </tbody>
    </Table>
  );
}

export default LiveScorecard;