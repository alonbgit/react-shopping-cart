import React, { Component } from 'react';
import ProductList from '../ProductList/ProductList';

class ShoppingCart extends Component {

    state = {
        products: [
            {
                name: 'Monkey',
                description: 'This is a monkey',
                price: 5.50
            },
            {
                name: 'Kitten',
                description: 'This is a kitten',
                price: 10.00
            },
            {
                name: 'Shark',
                description: 'This is a shark',
                price: 15.00
            },
            {
                name: 'Puppy',
                description: 'This is a puppy',
                price: 5.00
            }
        ]
    }

    render() {
        return (
            <div className="shopping-cart">
                <span>React.JS ShoppingCart</span>
                <ProductList products={this.state.products}/>
            </div>
        )
    }

}

export default ShoppingCart;