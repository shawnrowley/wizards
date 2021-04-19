import React from "react";

const FullBoxScore = ({ score }) => {
  return (
    <tr key={score.personId}>
      <td>{score.gameDate.split(" ")[0]}</td>
      <td>{score.points}</td>
      <td>{score.fieldGoalsAttempted}</td>
      <td>{score.plusMinus}</td>
    </tr>
  );
};

export default FullBoxScore;
