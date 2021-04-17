import {
  PLAYER_LIST_REQUEST,
  PLAYER_LIST_SUCCESS,
  PLAYER_LIST_FAIL,
  PLAYER_DETAIL_REQUEST,
  PLAYER_DETAIL_SUCCESS,
  PLAYER_DETAIL_FAIL,
} from "../constants/playerConstants";
import players from "../data/players";

export const listPlayers = () => async (dispatch) => {
  try {
    dispatch({ type: PLAYER_LIST_REQUEST });

    console.log("getting data....");

    console.log(players);

    const { data } = players;

    console.log("data :" + data);

    dispatch({
      type: PLAYER_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PLAYER_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const detailPlayer = (id) => async (dispatch) => {
  try {
    dispatch({ type: PLAYER_DETAIL_REQUEST });

    let csvToJson = require("convert-csv-to-json");
    const { data } = csvToJson.generateJsonFileFromCsv("../data/players.csv");

    dispatch({
      type: PLAYER_DETAIL_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PLAYER_DETAIL_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
