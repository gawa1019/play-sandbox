import React from "react";

export default class ListContainer extends React.Component {
    constructor(props, context) {
        super(props, context);
    }
    
    render() {
        const {children} = this.props;
        return (
            <div>
                <ul>{children}</ul>
            </div>
        )
    }
}