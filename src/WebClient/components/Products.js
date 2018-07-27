import React from 'react';
import ProductInfo from './ProductInfo';

export default class Products extends React.Component {
    constructor(props) {
        super(props)
    }

    defineClassForPrice(price) {
        return price > this.props.avgPrice * 1.2 ? 'expensive' : (price <
        this.props.avgPrice * 0.8 ? 'cheap' : '');
    }

    createProductInfo(prod) {
        return (
            <ProductInfo name={prod.name} description={prod.description} part_number={prod.part_number}
                         price={prod.price} supplier={prod.supplier} image={prod.image} vendor={prod.vendor}
                         vendor_description={prod.vendor_description}
                         vendor_part_number={prod.vendor_part_number}
                         classP={this.defineClassForPrice(prod.price)}/>
        );
    }

    render() {
        return (
            <table id="products">
                <tr>
                    <th className="product-name">Name</th>
                    <th className="product-price">Price</th>
                    <th className="product-part_number">Part number</th>
                    <th className="product-supplier">Supplier</th>
                    <th className="product-vendor">Vendor</th>
                    <th className="product-vendor_part_number">Vandor part number</th>
                    <th className="product-image">Image</th>
                </tr>
                {this.props.products.length > 0 ? <tbody>{this.props.products.map(prod => {
                    return this.createProductInfo(prod);
                })}
                </tbody> : ''}
            </table>
        )
    }
}
