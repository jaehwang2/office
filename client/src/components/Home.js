import React from 'react';
import Menu from '../containers/Menu';
import View from '../containers/View';
import Header from './Header';


const Home = () => (
  <div className="main">
    <Header />
    <div className="home">
      <Menu />
      <View />
    </div>
  </div>
);

export default Home;
