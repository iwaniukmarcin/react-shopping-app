import React from "react";
import Product from "../Product/Product";
import '../../App.css';


const AllProducts = ({ products }) => (
    <div className="products">{products.map(item => (<Product key={item.id} {...item} />))}
    </div>
);
export default AllProducts;
