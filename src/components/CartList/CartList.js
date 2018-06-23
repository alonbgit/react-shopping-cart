import React, { Component } from 'react';
import './CartList.scss';

class CartList extends Component {

    render() {
        return (
            <div className="cart-list">
                {this.props.products.map((product, index) => {
                    return (
                        <div className="product-details" key={index}>
                            <img src={product.product.imageUrl} alt=""/>

                            <div className="buttons">
                                <button className="add-btn" onClick={() => this.props.add(product.product.id)}>+</button>
                                <span className="amount">{product.amount}</span>
                                <button className="remove-btn" onClick={() => this.props.remove(product.product.id)}>-</button>
                            </div>

                            <span className="product-name">{product.product.name}s</span>

                            <span className="price">${product.product.price.toFixed(2)}</span>
                        </div>
                    )
                })}
            </div>
        )
    }

}

export default CartList;