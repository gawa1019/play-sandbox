import {connect} from "react-redux";
import Counter from "../components/Counter";
import {addCount1} from "../actions/index";

const mapState = (state) => {
    return {
        countNumber: state.counterState.count1
    }
};

const mapDispatch = (dispatch) => {
    return {
        addCount: () => {
            dispatch(addCount1());
        }
    }
};
export default connect(mapState, mapDispatch)(Counter);


// export default connect(
//     mapState,
//     {addCount} //{"addCount": addCount}
// )(Counter);