import React from 'react';

class Tools extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div id="tools">
                <button onClick={this.props.previousPage}>Previous</button>
                <div>{this.props.pageNum}</div>
                <button onClick={this.props.nextPage}>Next</button>
            </div>
        )
    }
}


module.exports = Tools;