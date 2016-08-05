import update from "react-addons-update";
import * as type from "../values/actionType";

const INITIAL_STATE = {
    itemList:[]
};

export default (state =INITIAL_STATE, action ) => {
    switch (action.type) {
        case type.ADD_ITEM:{
            const text = action.payload;
            return update(state, {itemList: {$push: [text]}});
        }
        case type.DELETE_ITEM:{
            const index = action.payload;
            return update(state, {itemList: {$splice: [[index, 1]]}});
        }
        case type.MOVE_ITEM:{
            const {sourceText, targetText} = action.payload;
            const sourceIndex = state.itemList.indexOf(sourceText);
            const targetIndex = state.itemList.indexOf(targetText);

            return update(state, {itemList: {
                [sourceIndex]: {$set: state.itemList[targetIndex]},
                [targetIndex]:{$set: state.itemList[sourceIndex]}
            }})
        }
        default:
            return state;
    }
}