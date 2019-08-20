import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { menuActions } from '../actions';
import ViewForm from '../components/ViewForm';

class View extends Component {
  render() {
    return (
      <ViewForm
        handleClickChange={this.props.handleClickChange}
        views={this.props.views}
      />
    );
  }
}

View.propTypes = {
  handleClickChange: PropTypes.func.isRequired,
  views: PropTypes.object.isRequired,

};

const mapStateToProps = state => ({
  views: state.menu.views,
});

const mapDispatchToProps = dispatch => ({
  handleClickChange: item => dispatch(menuActions.clickMenu(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(View);
