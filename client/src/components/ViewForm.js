import React, { Component } from 'react';
import { ListGroup } from 'react-bootstrap';
import PropTypes from 'prop-types';

class ViewForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      views: this.props.views,
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      views: nextProps.views,
    });
  }

  renderList() {
    const { handleClickChange } = this.props;
    const { views } = this.state;
    return Object.keys(views).map((key) => {
      const item = views[key];
      return (
        <ListGroup.Item size="lg" key={item.name} action variant="light" onClick={() => handleClickChange(item)}>
          { item.name }
        </ListGroup.Item>
      );
    });
  }

  render() {
    const { views } = this.state;
    console.log(views)
    if (views) {
      return (
        <div className="view_form">
          { this.renderList() }
        </div>
      );
    }
    return (
      <div className="menu_items">
        failed
      </div>
    );
  }
}

ViewForm.propTypes = {
  handleClickChange: PropTypes.func.isRequired,
  views: PropTypes.object.isRequired,
};

export default ViewForm;
