import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProductItem from '../ProductItem/ProductItem';
import './ProductList.scss';

class ProductList extends Component {

    render() {
        return (
            <div className="product-list">
                {this.props.products.map((product) => (
                    <ProductItem key={product.id}
                                name={product.name}
                                description={product.description}
                                price={product.price}
                                imageUrl={product.imageUrl}/>
                ))}
            </div>
        )
    }

}

ProductList.propTypes = {

    products: PropTypes.array

}

ProductList.defaultProps = {

    products: []

}

export default ProductList;