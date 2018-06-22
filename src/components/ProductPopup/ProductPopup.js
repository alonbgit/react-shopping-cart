import React, { Component } from 'react';
import './ProductPopup.scss';

class ProductPopup extends Component {

    render() {
        return (
            <div className="product-popup">
                
                <div class="close-btn" onClick={this.props.close}>X</div>
                <img src={this.props.product.imageUrl} alt=""/>
                <span className="product-name">{this.props.product.name}</span>
                <span className="product-description">{this.props.product.description}</span>
                <span className="product-full-description">{this.props.product.fullDescription}</span>
                <span className="product-price">{this.props.product.price}</span>

                <div>
                </div>

            </div>
        )
    }

}

export default ProductPopup;