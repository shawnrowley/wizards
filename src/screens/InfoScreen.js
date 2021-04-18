import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Row, Col, Image, ListGroup, Button, Table } from "react-bootstrap";
import Message from "../components/Message";
import Loader from "../components/Loader";
import { detailPlayer } from "../actions/playerActions";
import players from "../data/players";
import boxScores from "../data/boxScores";

const InfoScreen = ({ history, match }) => {
  const [player, setPlayer] = useState({});
  const [scores, setScores] = useState([]);

  // const dispatch = useDispatch();

  // const playerDetail = useSelector((state) => state.playerDetail);
  // const { loading, error, player } = playerDetail;

  useEffect(() => {
    //   dispatch(detailPlayer(match.params.id));
    let player = players.filter(
      (play) => play.personId === parseInt(match.params.id)
    )[0];
    setPlayer(player);

    let playerScores = boxScores.filter(
      (score) => score.personId === parseInt(match.params.id)
    );
    setScores(playerScores);
  }, [match]);

  const viewStatsHandler = () => {};

  let loading = false;
  let error = false;

  return (
    <>
      <Link className="btn btn-dark my-3" to="/">
        Go Back
      </Link>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Row>
          <Col md={6}>
            <Image src={player.imageUrl} alt={player.imageUrl} fluid />
          </Col>
          <Col md={6}>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h3>{player.playerName}</h3>
              </ListGroup.Item>
              <ListGroup.Item>
                <strong>DOB: </strong>
                {player.birthDate}
              </ListGroup.Item>
              <ListGroup.Item>
                {" "}
                <strong>Height: </strong>
                {player.height}
              </ListGroup.Item>
              <ListGroup.Item>
                <strong>Weight: </strong>
                {player.weight}
              </ListGroup.Item>
              <ListGroup.Item>
                <strong>Years Pro: </strong>
                {player.yearsProService}
              </ListGroup.Item>

              <ListGroup.Item>
                <Button
                  onClick={viewStatsHandler}
                  className="btn-block"
                  type="button"
                >
                  Toggle Box Scores
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      )}

      <h3> Box Scores</h3>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Table striped bordered hover responsive className="table-sm">
          <thead>
            <tr>
              <th>PersonID</th>
              <th>Date</th>
              <th>Points</th>
              <th>FGA</th>
              <th>+/-</th>
            </tr>
          </thead>
          <tbody>
            {scores.map((score) => (
              <tr key={score.personId}>
                <td>{score.personId}</td>
                <td>{score.gameDate}</td>
                <td>{score.points}</td>
                <td>{score.fieldGoalsAttempted}</td>
                <td>{score.plusMinus}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </>
  );
};

export default InfoScreen;
