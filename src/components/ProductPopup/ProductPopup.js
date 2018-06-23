import React, { Component } from 'react';
import './ProductPopup.scss';

class ProductPopup extends Component {

    state = {
        quantity: ''
    }

    render() {

        let buttonDisabled = false;
        if (this.state.quantity === '' || isNaN(this.state.quantity))
            buttonDisabled = true;

        return (
            <div className="product-popup">
                
                <div className="close-btn" onClick={this.props.close}>X</div>
                <img src={this.props.product.imageUrl} alt=""/>
                <span className="product-name">{this.props.product.name}</span>
                <span className="product-description">{this.props.product.description}</span>
                <span className="product-full-description">{this.props.product.fullDescription}</span>
                <span className="product-price">${this.props.product.price.toFixed(2)}</span>

                <div className="add-to-cart-container">
                    <div className="quantity">Quantity</div>
                    <input type="text" 
                           className="quantity-number"
                           onChange={(e) => this.setState({quantity: e.target.value})}
                           value={this.state.quantity}/>
                    <button className="add-to-cart-btn"
                            disabled={buttonDisabled}
                            onClick={() => this.props.addToCart(this.state.quantity)}>Add to Cart</button>
                </div>

            </div>
        )
    }

}

export default ProductPopup;