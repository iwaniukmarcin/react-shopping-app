import React from "react";
import { connect } from 'react-redux';
import AddToBasketBtn from "../AddToBasketBtn/AddToBasketBtn";

const Product = ({ name, image, amount, id, cart }) => {
    const inCart = cart.some(item => item === id);
    return (
        <div className="product">
            <img src={image} alt={name} />
            <p className="price">${amount}</p>
            <h3>{name}</h3>
            { inCart
                ? <div className="basketBtnContainer">Added to cart</div>
                : <AddToBasketBtn id={id} />
            }
        </div>
    );
}
export default connect(state => ({ cart: state.cart }))(Product);
