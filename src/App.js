import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Home from './components/pages/Home';
import Catalog from './components/pages/Catalog';
import About from './components/pages/About';
import Navigation from './components/Navigation/Navigation';
import './App.css';
import Basket from './components/pages/Cart';

import productsActions from './store/actions/products';
class App extends Component {
  componentDidMount() {
    this.props.loadData();
  }
  
  render() {
    const { isLoading, isError } = this.props;
    if (isLoading) {
      return (<p>Loading...</p>);
    } else if (isError) {
      return (<p>Error!</p>);
    } else {
      return (
        <Router>
          <div>
            <Navigation />
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About}/>
              <Route path="/catalog" component={Catalog} />
              <Route path="/cart" component={Basket} />
              <Redirect from="/home" to="/"></Redirect>
          </div>
        </Router>
      );
    }
  }
}

const mapStateToProps = (state) => ({
  isLoading: state.products.isLoading,
  isError: state.products.isError
});
const mapDispatchToProps = dispatch => ({
  loadData: () => dispatch(productsActions.loadData())
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
