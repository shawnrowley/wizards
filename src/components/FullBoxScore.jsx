import React from "react";

const All = ({ score }) => {
  return (
    <>
      <td>{score.points}</td>
      <td>{score.fieldGoalsAttempted}</td>
      <td>{score.plusMinus}</td>
    </>
  );
};

const FullBoxScore = ({ score, type }) => {
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
