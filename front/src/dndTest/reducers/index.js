import {combineReducers} from "redux";
import listState from "./listState";
import uiState from "./uiState";

export default combineReducers({
    listState,
    uiState
})