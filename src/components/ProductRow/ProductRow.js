import React, { Component } from 'react';
import ProductItem from '../ProductItem/ProductItem';
import './ProductRow.scss';

class ProductRow extends Component {

    render() {
        return (
            <div className="product-row">
                {this.props.products.map((product, index) => {
                    const productItem = 
                        <ProductItem key={product.id}
                                name={product.name}
                                description={product.description}
                                price={product.price}
                                imageUrl={product.imageUrl}/>
                    return productItem;
                })}
            </div>
        )
    }

}

export default ProductRow;