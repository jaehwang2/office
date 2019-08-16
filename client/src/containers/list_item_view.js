import { connect } from 'react-redux';
import { viewItem } from '../actions/list_actions';
import ItemView from '../components/list_item_view';

const mapStateToProps = state => ({
  item: state.list.itemView,
});

const mapDispatchToProps = dispatch => ({
  viewItem: (name) => {
    dispatch(viewItem(name));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ItemView);
