import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProductRow from '../ProductRow/ProductRow';
import './ProductList.scss';

class ProductList extends Component {

    render() {

        let productRows = [];

        // split the products into rows
        this.props.products.forEach((product, index) => {
            if (index % 4 === 0)
                productRows.push([]);

            const row = productRows[productRows.length - 1];
            row.push(product);
        });

        return (
            <div className="product-list">

                {productRows.map((products, index) => (
                    <ProductRow products={products}
                                key={index}
                                openPopup={this.props.openPopup}/>
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