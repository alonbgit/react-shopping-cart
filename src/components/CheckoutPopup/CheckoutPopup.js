import React, { Component } from 'react';
import './CheckoutPopup.scss';

class CheckoutPopup extends Component {

    render() {
        return (
            <div className="checkout-popup">
                <div className="close-btn" onClick={this.props.close}>X</div>
                <span className="checkout-header">Checkout</span>
                <span className="total-price">Total Price: ${this.props.totalPrice.toFixed(2)}</span>
            </div>
        )
    }

}

export default CheckoutPopup;