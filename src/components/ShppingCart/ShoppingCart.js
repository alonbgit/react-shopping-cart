import React, { Component } from 'react';
import ProductList from '../ProductList/ProductList';
import './ShoppingCart.scss';

import moneyImage from '../../images/products/chimpanzee.jpg'
import kittensImage from '../../images/products/kittens.jpg'
import sharkImage from '../../images/products/shark.jpg'
import dogImage from '../../images/products/dog.jpg'

class ShoppingCart extends Component {

    state = {
        products: [
            {
                id: 1,
                name: 'Monkey',
                description: 'This is a monkey',
                price: 5.50,
                imageUrl: moneyImage
            },
            {
                id: 2,
                name: 'Kitten',
                description: 'This is a kitten',
                price: 10.00,
                imageUrl: kittensImage
            },
            {
                id: 3,
                name: 'Shark',
                description: 'This is a shark',
                price: 15.00,
                imageUrl: sharkImage
            },
            {
                id: 4,
                name: 'Puppy',
                description: 'This is a puppy',
                price: 5.00,
                imageUrl: dogImage
            }
        ]
    }

    render() {
        return (
            <div className="shopping-cart">
                <span className="header">Products</span>
                <ProductList products={this.state.products}/>
            </div>
        )
    }

}

export default ShoppingCart;