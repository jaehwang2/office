import { connect } from 'react-redux';
import { listActions } from '../actions/list_actions';
import ListItems from '../components/list_items';

const mapStateToProps = state => ({
  listItems: state.list.items,
});

const mapDispatchToProps = dispatch => ({
  previewItem: (name) => {
    dispatch(listActions.previewItem(name));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ListItems);
