import React from 'react';
import Menu from '../containers/Menu'
import ListItemPreview from '../containers/list_item_preview';
import Header from './header';

const Home = () => (
  <div>
    <div>
      <Header />
    </div>
    <div className="home">
      <Menu />
      <ListItemPreview />
    </div>
  </div>
);

export default Home;
