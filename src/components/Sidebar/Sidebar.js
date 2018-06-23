import React, { Component } from 'react';
import './Sidebar.scss';
import CartList from '../CartList/CartList';

class Sidebar extends Component {

    render() {

        const totalAmount = this.calculateTotalAmount();
        const totalPrice = this.calculateTotalPrice();

        return (
            <div className="side-bar">
                <span className="total-amount">{totalAmount}</span>
                <CartList products={this.props.products}
                          add={this.props.add}
                          remove={this.props.remove}/>
                <div className="seperator"/>
                <span className="total-price">${totalPrice.toFixed(2)}</span>
                <div className="buttons">
                    <button className="clear-cart-btn" onClick={this.props.clearCart}>Clear Cart</button>
                    <button className="checkout-btn" onClick={() => this.props.checkoutCart({totalPrice: totalPrice})}>Checkout</button>
                </div>
            </div>
        )

    }

    calculateTotalAmount = () => {
        let amount = 0;
        this.props.products.forEach((productDetails) => {
            amount += productDetails.amount;
        });
        return amount;
    }

    calculateTotalPrice = () => {
        let price = 0;
        this.props.products.forEach((productDetails) => {
            price += (productDetails.amount * productDetails.product.price);
        });
        return price;
    }

}

export default Sidebar;