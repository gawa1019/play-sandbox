import update from "react-addons-update";
import * as type from "../values/actionType";

const INITIAL_STATE = {
    inputText: ""
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case type.INPUT_TEXT:{
            const text = action.payload;
            return update(state, {inputText:{$set: text}});
        }
        case type.DELETE_TEXT: {
            return update(state, {inputText:{$set: ""}});
        }
        default:
            return state;
    }
}
