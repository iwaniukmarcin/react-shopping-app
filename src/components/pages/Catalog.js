import React, { Component } from "react";
import { connect } from 'react-redux';
import HeaderBig from "../Headers/HeaderBig";
import productsActions from '../../store/actions/products';
import AllProducts from "../AllProducts/AllProducts";
import ShopService from "../../services/shop.service";
import Filters from "./Filters";
import '../../App.css';

class Catalog extends Component {

    state = {
        products: []
    };

    handleFilterChange = filters => {
        const filteredProducts = ShopService.getProductsByFilter(this.props.items, { name: filters.text, manufacture: filters.manufacture === "All" ? null : filters.manufacture });
        this.setState({ products: filteredProducts });
    };

    componentDidMount() {
        this.handleFilterChange({ text: "", manufacture: "All" });
    }

    render() {
        const initFilters = { text: "", manufacture: "All" };
        const { manufacturers } = this.props;
        const { products } = this.state;

        return (
    <div className="mainContainer">
                <HeaderBig>Catalog</HeaderBig>

                <div className="catalog">
                <div className="columnLeft">
                    <Filters initValue={initFilters} onChange={this.handleFilterChange} manufacturers={manufacturers} />
                </div>

                <div className="columnRight">
                    <AllProducts products={products} />
                </div>
                </div>
            </div>
        );
    }
}


const mapStateToProps = (state) => ({
    items: state.products.data,
    manufacturers: state.products.manufacturers
});
const mapDispatchToProps = dispatch => ({
    loadData: () => dispatch(productsActions.loadData())
});
export default connect(mapStateToProps, mapDispatchToProps)(Catalog);
