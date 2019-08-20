import React, { Component } from 'react';
import { connect } from 'react-redux';
import MenuItem from '../components/MenuItem';
import PropTypes from 'prop-types'
import { menuActions } from '../actions';

class Menu extends Component {
  render() {
    return (
      <MenuItem
        handleClickMenu={this.props.handleClickMenu}
        menuItems={this.props.menuItems}
      />
    );
  }
}

Menu.propTypes = {
  handleClickMenu: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  menuItems: state.menu.items,
})

const mapDispatchToProps = dispatch => ({
  handleClickMenu: item => dispatch(menuActions.clickMenu(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
