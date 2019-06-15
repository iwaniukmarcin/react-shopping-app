import React from 'react';
import { connect } from 'react-redux';

import cartActions from '../../store/actions/cart';

const AddToBasketBtn = ({ id, addToCart }) => {
    return (
        <div className="basketBtnContainer">
            <button className="addToBasketBtn" onClick={() => addToCart(id)}>Add to cart</button>
        </div>
    )
}

export default connect(
    null,
    dispatch => ({ addToCart: (id) => dispatch(cartActions.addItem(id)) })
)(AddToBasketBtn);