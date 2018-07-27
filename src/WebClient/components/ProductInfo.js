import React from 'react';

export default class ProductInfo extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <tr>
                <td className="product-name">{this.props.name}
                    <div className="hidden-description">
                        {this.props.description}
                    </div>
                </td>
                <td className={`product-price ${this.props.classP}`}>{this.props.price}</td>
                <td className="product-part_number">{this.props.part_number}</td>
                <td className="product-supplier">{this.props.supplier}</td>
                <td className="product-vendor">{this.props.vendor}
                    <div className="hidden-vendor-description">
                        {this.props.vendor_description}
                    </div>
                </td>
                <td className="product-vendor-part-number">{this.props.vendor_part_number}</td>
                <td className="product-image"><img src={this.props.image}/></td>
            </tr>
        )
    }
}
