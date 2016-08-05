import React from "react";
import {connect} from "react-redux";
import * as actions from "../actions/index";
import {DragSource, DropTarget} from "react-dnd";

const dragSpec = {
    beginDrag(props) {
        const {index, text} = props;
        return {index, text};
    }
};

const dropSpec = {
    hover(props, monitor) {
        const source = monitor.getItem();
        const targetText = props.text;
        if (source.text!= props.text) {
            props.moveItem({sourceText: source.text, targetText});
        }
    }
};

class ListItem extends React.Component {
    static PropTypes = {
        index: React.PropTypes.number,
        text: React.PropTypes.string
    };

    constructor(props, context) {
        super(props, context);
    }

    render() {
        const {index, text, isDragging, connectDragSource,connectDropTarget} = this.props;
        return connectDropTarget(connectDragSource(
            <li style={isDragging ? {backgroundColor:"red"}:{}}>
                <a>{`index: ${index} ${text}`}</a>
            </li>
        ))
    }
}

const mapState = (state, props) => {
    return {
        text: state.listState.itemList[props.index]
    }
};

const dragListItem = DragSource("item", dragSpec, (connect, monitor) => ({connectDragSource: connect.dragSource(), isDragging: monitor.isDragging()}))(ListItem);
const dropListItem = DropTarget("item", dropSpec, (connect) => ({connectDropTarget: connect.dropTarget()}))(dragListItem);
export default connect(mapState, actions)(dropListItem);