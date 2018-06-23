import React, { Component } from 'react';
import ProductList from '../ProductList/ProductList';
import './ShoppingCart.scss';
import ProductPopup from '../ProductPopup/ProductPopup';

import moneyImage from '../../images/products/chimpanzee.jpg';
import kittensImage from '../../images/products/kittens.jpg';
import sharkImage from '../../images/products/shark.jpg';
import dogImage from '../../images/products/dog.jpg';
import appleImage from '../../images/products/apple.jpg';
import orangeImage from '../../images/products/orange.jpg';
import peachImage from '../../images/products/peach.jpg';
import mangoImage from '../../images/products/mango.png';

class ShoppingCart extends Component {

    state = {
        selectedProduct: null,

        products: [
            {
                id: 1,
                name: 'Monkey',
                description: 'This is a monkey',
                fullDescription: 'This is full description on the monkey',
                price: 5.50,
                imageUrl: moneyImage
            },
            {
                id: 2,
                name: 'Kitten',
                description: 'This is a kitten',
                fullDescription: 'This is full description on the kitten',
                price: 10.00,
                imageUrl: kittensImage
            },
            {
                id: 3,
                name: 'Shark',
                description: 'This is a shark',
                fullDescription: 'This is full description on the shark',
                price: 15.00,
                imageUrl: sharkImage
            },
            {
                id: 4,
                name: 'Puppy',
                description: 'This is a puppy',
                fullDescription: 'This is full description on the puppy',
                price: 5.00,
                imageUrl: dogImage
            },
            {
                id: 5,
                name: 'Apple',
                description: 'This is an apple',
                fullDescription: 'This is full description on the apple',
                price: 5.50,
                imageUrl: appleImage
            },
            {
                id: 6,
                name: 'Orange',
                description: 'This is an orange',
                fullDescription: 'This is full description on the orange',
                price: 10.00,
                imageUrl: orangeImage
            },
            {
                id: 7,
                name: 'Peach',
                description: 'This is a peach',
                fullDescription: 'This is full description on the peach',
                price: 15.00,
                imageUrl: peachImage
            },
            {
                id: 8,
                name: 'Mango',
                description: 'This is a mango',
                fullDescription: 'This is full description on the mango',
                price: 5.00,
                imageUrl: mangoImage
            }
        ],

        cart: [
            {
                productId: 1,
                amount: 0
            }
        ]
    }

    render() {
        return (
            <div className="shopping-cart">
                <span className="header">Products</span>
                <ProductList products={this.state.products}
                             openPopup={this.openPopup}/>
                {this.state.selectedProduct && <ProductPopup 
                                                        close={this.closePopup}
                                                        product={this.state.selectedProduct}
                                                        addToCart={this.addToCart}/>}
                {this.state.selectedProduct && <div className="overlay"></div>}
            </div>
        )
    }

    addToCart = (amount) => {
        console.log('product', this.state.selectedProduct, 'amount', amount);
    }

    openPopup = (product) => {
        this.setState({
            selectedProduct: product
        });
    }

    closePopup = () => {
        this.setState({
            selectedProduct: null
        });
    }

}

export default ShoppingCart;