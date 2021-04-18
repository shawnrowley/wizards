import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Player from "../components/Player";
import Message from "../components/Message";
import Loader from "../components/Loader";
import { Row, Col } from "react-bootstrap";
import { listPlayers } from "../actions/playerActions";
import players from "../data/players";

const PlayerScreen = () => {
  // const dispatch = useDispatch();

  // const playerList = useSelector((state) => state.playerList);
  // const { loading, error, players } = playerList;

  // useEffect(() => {
  //   dispatch(listPlayers());
  // }, [dispatch]);
  let loading = false;
  let error = false;

  return (
    <div>
      <h1>Wizards Roster</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Row>
          {players.map((player) => (
            <Col sm={12} md={6} lg={4} xl={3}>
              <Player key={player.personId} player={player} />
            </Col>
          ))}
        </Row>
      )}
    </div>
  );
};

export default PlayerScreen;
