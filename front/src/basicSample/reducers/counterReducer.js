import update from "react-addons-update";
import * as type from "../values/actionType";

const INITIAL_STATE = {
    count1: 0,
    count2: 0
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case type.ADD_COUNT_1:{
            return update(state, {count1: {$set: state.count1 + 1}});
        }
        case type.ADD_COUNT_2:{
            return update(state, {count2: {$set: state.count2 + 1}});
        }
        default:
            return state;
    }
}