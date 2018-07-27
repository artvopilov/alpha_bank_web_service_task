import React from 'react';

export default class StatusBar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="status-bar">
                <ul>
                    <li>Общее количество товаров: {this.props.productsCount}</li>
                    <li>Минимальная цена: {this.props.minPrice}</li>
                    <li>Максимальная цена: {this.props.maxPrice}</li>
                </ul>
            </div>
        )
    }
}
