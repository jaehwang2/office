import React, { Component } from 'react';
import { ListGroup } from 'react-bootstrap';
import PropTypes from 'prop-types';

class MenuItem extends Component {
  renderList() {
    const { menuItems, handleClickMenu } = this.props;
    return Object.keys(menuItems).map((key) => {
      const item = menuItems[key];
      return (
        <ListGroup.Item action variant="light" onClick={() => handleClickMenu(item)}>
          { item.name }
        </ListGroup.Item>
      );
    });
  }

  render() {
    return (
      <div className="menu_items">
        <ListGroup>
          { this.renderList() }
        </ListGroup>
      </div>
    );
  }
}

MenuItem.propTypes = {
  menuItems: PropTypes.string.isRequired,
  handleClickMenu: PropTypes.func.isRequired,
};

export default MenuItem;
