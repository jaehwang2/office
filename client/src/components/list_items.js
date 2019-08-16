import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MenuItem from './menu_items';
import Button from 'react-bootstrap/Button';

class ListView extends Component {
  renderList() {
    const { listItems, previewItem } = this.props;
    return Object.keys(listItems).map((key) => {
      const item = listItems[key];
      return (

        <li
          key={item.name}
        >
          <Button onClick={() => previewItem(item.name)}>{ item.name }</Button>
        </li>
      );
    });
  }
  render() {
    return (
      <div className="list_items">
        <ul>
          { this.renderList() }
        </ul>
        <MenuItem name="hello" />
      </div>
    );
  }
}

ListView.propTypes = {
  listItems: PropTypes.object.isRequired,
  previewItem: PropTypes.func.isRequired,
};

export default ListView;
