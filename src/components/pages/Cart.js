import React from 'react';
import { connect } from  'react-redux';

import cartActions from '../../store/actions/cart';

const Cart = ({ cart, products, deleteItem }) => {

    const cartObjects = cart.map(id => products.find(item => item.id === id)).filter(Boolean);
    const cartEntries = cartObjects.map(e=> <div>{e.name} <button onClick={() => deleteItem(e.id)}>Remove</button></div>);
    
    return (
        <div className="cartContainer">
            <div>{cartEntries.length === 0 ? "The cart is empty" : cartEntries}</div><br />
        </div>
    );
}
export default connect(
    state => ({
        cart: state.cart,
        products: state.products.data 
    }),
    dispatch => ({
        deleteItem: (id) => dispatch(cartActions.deleteItem(id))
    })
)(Cart);