import {action, error} from "../../util/make-action";
import * as type from "../values/actionType";

export const inputText = action(type.INPUT_TEXT);
export const deleteText = action(type.DELETE_TEXT);

export const addItem = action(type.ADD_ITEM);
export const deleteItem = action(type.DELETE_ITEM);
export const moveItem = action(type.MOVE_ITEM);
