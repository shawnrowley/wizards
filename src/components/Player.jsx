import React from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";

const Player = ({ player }) => {
  return (
    <div>
      <Card className="my-3 p-3 rounded">
        <Link to={`/player/${player.personId}`}>
          <Card.Img src={player.imageUrl} variant="top" />
        </Link>
        <Card.Body>
          <Link to={`/player/${player.personId}`}>
            <Card.Title as="div">
              <strong>{player.playerName}</strong>
            </Card.Title>
          </Link>
          <Card.Text as="h6">
            <strong>DOB: </strong>
            {player.birthDate}
          </Card.Text>
          <Card.Text as="h6">
            <strong>Height: </strong>
            {player.height}
          </Card.Text>
          <Card.Text as="h6">
            <strong>Weight: </strong>
            {player.weight}
          </Card.Text>
          <Card.Text as="h6">
            <strong>Years Pro: </strong>
            {player.yearsProService}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Player;
