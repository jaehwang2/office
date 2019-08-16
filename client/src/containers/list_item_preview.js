import { connect } from 'react-redux';
import ListItemPreview from '../components/list_item_preview';

function mapStateToProps(state) {
  return {
    item: state.list.itemPreview,
  };
}

export default connect(mapStateToProps)(ListItemPreview);
