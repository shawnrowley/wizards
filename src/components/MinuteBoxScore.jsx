import React from "react";

const MinuteBoxScore = ({ score }) => {
  return (
    <tr key={score.personId}>
      <td>{score.gameDate.split(" ")[0]}</td>
      <td>{score.pointsPer36MP}</td>
      <td>{score.fieldGoalsAttemptedPer36MP}</td>
      <td>{score.plusMinusPer36MP}</td>
    </tr>
  );
};

export default MinuteBoxScore;
