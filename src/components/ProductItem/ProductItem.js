import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './ProductItem.scss';

class ProductItem extends Component {

    render() {
        return (
            <div className="product-item">
                <img src={this.props.imageUrl} alt=""/>
                <div className="product-details">
                    <span className="product-name">{this.props.name}</span>
                    <span className="product-description">{this.props.description}</span>
                    <span className="product-price">${this.props.price.toFixed(2)}</span>
                </div>
            </div>
        )
    }

}

ProductItem.propTypes = {
    imageUrl: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string,
    price: PropTypes.number
}

export default ProductItem;