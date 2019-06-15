import React from 'react';
import { connect } from 'react-redux';

const CartInfo = ({ cart }) => {
    const count = cart.length;
    return (
        <span className="cartInfo">Items in cart: { count }</span>
    )
}
export default connect(state => ({ cart: state.cart }))(CartInfo);