import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  playerListReducer,
  playerDetailReducer,
} from "./reducers/playerReducer";

const reducer = combineReducers({
  playerList: playerListReducer,
  playerDetail: playerDetailReducer,
});

// Populate the initailState
const initialState = {};
const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
