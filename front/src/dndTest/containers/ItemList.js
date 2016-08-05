import React from "react";
import {connect} from "react-redux";
import * as actions from "../actions/index";
import ListContainer from "../components/ListContainer";
import DraggableItem from "./DraggableItem";
import HTML5Backend from "react-dnd-html5-backend";
import {DragDropContext} from "react-dnd";

class ItemList extends React.Component {
    static PropTypes = {
        text: React.PropTypes.string,
        itemList: React.PropTypes.array
    };

    constructor(props, context) {
        super(props, context);
    }

    onInputText() {
        const {inputText} = this.props;
        return (e) => {
            inputText(e.target.value);
        }
    }

    onAddClick() {
        const {text, addItem} = this.props;
        return () => {
            const rand = Math.floor( Math.random() * (1000000 + 1));
            addItem(rand);
        }
    }

    render() {
        const {itemList} = this.props;
        return (
            <div>
                <div>
                    <input type="text" onChange={this.onInputText()}/>
                    <input type="button" value="追加" onClick={this.onAddClick()} />
                </div>
                <div>
                    <ListContainer>
                        {
                            itemList.map((item, index) => {
                                return <DraggableItem key={item} index={index}/>
                            })
                        }
                    </ListContainer>
                </div>
            </div>
        )
    }
}

const mapState = (state) => {
    return {
        text: state.uiState.inputText,
        itemList: state.listState.itemList
    }
};

const DraggableItemList = DragDropContext(HTML5Backend)(ItemList);

export default connect(mapState, actions)(DraggableItemList);