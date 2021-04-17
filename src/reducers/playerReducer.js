import {
  PLAYER_LIST_REQUEST,
  PLAYER_LIST_SUCCESS,
  PLAYER_LIST_FAIL,
  PLAYER_DETAIL_REQUEST,
  PLAYER_DETAIL_SUCCESS,
  PLAYER_DETAIL_FAIL,
} from "../constants/playerConstants";

export const playerListReducer = (state = { players: [] }, action) => {
  switch (action.type) {
    case PLAYER_LIST_REQUEST:
      return { loading: true, players: [] };
    case PLAYER_LIST_SUCCESS:
      return { loading: false, players: action.payload };
    case PLAYER_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const playerDetailReducer = (
  state = { player: { reviews: [] } },
  action
) => {
  switch (action.type) {
    case PLAYER_DETAIL_REQUEST:
      return { loading: true, ...state };
    case PLAYER_DETAIL_SUCCESS:
      return { loading: false, PLAYER: action.payload };
    case PLAYER_DETAIL_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
