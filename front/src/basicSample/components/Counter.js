import React from "react";

const style = {border: "solid 1px black"};

export default class Counter extends React.Component {
    static PropTypes = {
        countNumber: React.PropTypes.number.isRequired,
        addCount: React.PropTypes.func.isRequired
    };

    render() {
        const {countNumber, addCount} = this.props;
        return (
            <div style={style} onClick={addCount}>
                <h1>{`Count : ${countNumber}`}</h1>
            </div>
        )
    }
}