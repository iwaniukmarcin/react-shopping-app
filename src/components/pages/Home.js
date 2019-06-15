import React from "react";
import { connect } from "react-redux";

import HeaderBig from "../Headers/HeaderBig";
import HeaderSmall from "../Headers/SmallHeader";
import ShopService from "../../services/shop.service";
import AllProducts from "../AllProducts/AllProducts";



const ProductsSection = ({ title, products }) => (
    <div >
    <HeaderSmall>{title}</HeaderSmall>
    <AllProducts products={products} />
    </div>
);

const HomePage = ({ items }) => {
    const featuredDesktop = ShopService.getProductsByFilter(items, {
        category: "desktop",
        featured: true
    });
    
    const featuredTablet = ShopService.getProductsByFilter(items, {
        category: "tablet",
        featured: true
    });

    return (
        <div className="mainContainer">
        <HeaderBig>Welcome to our store</HeaderBig>
        <ProductsSection title="Desktops" products={featuredDesktop} />
        <ProductsSection title="Tablets" products={featuredTablet} />
        </div>
    );
}

export default connect(state => ({ items: state.products.data }))(HomePage);
