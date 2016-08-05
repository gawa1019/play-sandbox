import {connect} from "react-redux";
import Counter from "../components/Counter";
import {addCount2} from "../actions/index";

const mapState = (state) => {
    return {
        countNumber: state.counterState.count2
    }
};

const mapDispatch = (dispatch) => {
    return {
        addCount: () => {
            dispatch(addCount2());
        }
    }
};
export default connect(mapState, mapDispatch)(Counter);


// export default connect(
//     mapState,
//     {addCount} //{"addCount": addCount}
// )(Counter);