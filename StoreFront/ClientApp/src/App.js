import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';

import './custom.css'
import FetchProducts from './components/FetchProducts';
import ShowProduct from './components/ShowProduct';

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
        <Route exact path='/' component={FetchProducts} />
        <Route path='/fetch-products' component={FetchProducts} />
        <Route path='/product/:id' component={ShowProduct} />
      </Layout>
    );
  }
}
