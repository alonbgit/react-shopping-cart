import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ProductList extends Component {

    render() {
        return (
            this.props.products.map((product) => (
                <span>fsdfsd</span>
            ))
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