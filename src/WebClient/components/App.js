import React from 'react';
import axios from 'axios';

import StatusBar from './StatusBar'
import ProductsInfo from './Products'
import Tools from './Tools'

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            products: [],
            productsCount: 0,
            maxPrice: 0,
            minPrice: 0,
            avgPrice: 0,
            pageNum: 0
        };
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
                console.log(response.message)
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
        console.log(this.state.products);
        console.log(this.state.productsCount);
        console.log(this.state.maxPrice);
        console.log(this.state.minPrice);
        console.log(this.state.avgPrice);
        console.log(this.state.pageNum);
        return (
            <div id="main">
                <StatusBar productsCount={this.state.productsCount} minPrice={this.state.minPrice} maxPrice={this.state.maxPrice}/>
                <ProductsInfo products={this.state.products} avgPrice={this.state.avgPrice}/>
                <Tools pageNum={this.state.pageNum + 1} nextPage={this.onNextPage.bind(this)} previousPage={this.onPreviousPage.bind(this)}/>
            </div>
        )
    }
}


module.exports = App;
