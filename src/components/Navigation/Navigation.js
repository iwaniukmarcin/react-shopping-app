import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import '../../App.css';
import Container from '../Container/Container';
import CartInfo from '../CartInfo/CartInfo';

class Navigation extends Component {
    render() {
        return(
        <nav className="navbar">
            <Container>
                <ul className="nav">
                    <li><NavLink exact to="/" activeStyle = {{color: 'green'}}>Home</NavLink></li>
                    <li><NavLink to="/catalog" activeStyle = {{color: 'green'}}>Catalog</NavLink></li>
                    <li><NavLink to="/about" activeStyle={{color:'green'}}>About</NavLink></li>
                    <li><NavLink to="/cart" activeStyle={{color:'green'}}>Cart</NavLink></li>
                    <CartInfo/>
                </ul>
            </Container>
        </nav>
        )
    }
}
export default Navigation;