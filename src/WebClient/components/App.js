import React from 'react';
import axios from 'axios';

import StatusBar from './StatusBar'
import ProductsInfo from './Products'
import Tools from './Tools'

export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            products: [],
            productsCount: 0,
            maxPrice: 0,
            minPrice: 0,
            avgPrice: 0,
            pageNum: 0,
            error: false,
            errorMessage: false
        };

        this.onNextPage = this.onNextPage.bind(this);
        this.onPreviousPage = this.onPreviousPage.bind(this);
    }

    componentDidMount() {
        this.updateProducts()
    }

    updateProducts(firstProduct = 0, numberProducts = 10) {
        axios.get(`http://localhost:5000/api/products/range?from=${firstProduct}&number=${numberProducts}`)
            .then((response) => {
                const products = response.data.products;
                const productsCount = response.data.details.countP;
                const minPrice = response.data.details.minPrice;
                const maxPrice = response.data.details.maxPrice;
                const avgPrice = response.data.details.avgPrice;

                const pageNum = firstProduct / 10;
                this.setState({products, productsCount, maxPrice, minPrice, avgPrice, pageNum});
            })
            .catch(response => {
                const error = true;
                const errorMessage = response.message;
                this.setState({error, errorMessage});
            });
    }

    onNextPage() {
        if ((this.state.pageNum + 1) * 10 < this.state.productsCount) {
            this.updateProducts((this.state.pageNum + 1) * 10);
        }
    }

    onPreviousPage() {
        if (this.state.pageNum * 10 > 0) {
            this.updateProducts((this.state.pageNum - 1) * 10);
        }
    }

    render() {
        const content = () => {
            if (this.state.error) {
                return `Ошибка: ${this.state.errorMessage}`;
            }
            return '';
        };

        return (
            <div id="main">
                <p className='warning'>{content}</p>
                <StatusBar productsCount={this.state.productsCount} minPrice={this.state.minPrice} maxPrice={this.state.maxPrice}/>
                <ProductsInfo products={this.state.products} avgPrice={this.state.avgPrice}/>
                <Tools pageNum={this.state.pageNum + 1} nextPage={this.onNextPage} previousPage={this.onPreviousPage}/>
            </div>
        )
    }
}
