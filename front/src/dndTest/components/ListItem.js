import React from "react";

export default class ListItem extends React.Component {
    static PropTypes = {
        index: React.PropTypes.number,
        text: React.PropTypes.string
    };
    
    constructor(props, context) {
        super(props, context);
    }
    
    render() {
        const {index, text} = this.props;
        return (
            <li>
                <a>{`id: ${index} ${text}`}</a>
            </li>
        )
    }
}