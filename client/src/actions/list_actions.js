import { LIST_ACTIONS } from '../consts/action_types';

export const listActions = {
  previewItem,
  viewItem,
  addItem,
  clearItem
}

const previewItem = name => ({
  type: LIST_ACTIONS.ITEM_PREVIEW,
  name, // shorthand for name: name
});

const viewItem = name => ({
  type: LIST_ACTIONS.ITEM_VIEW,
  name,
});

const addItem = item => ({
  type: LIST_ACTIONS.ITEM_ADD,
  item, // shorthand for item: item
});

const clearItem = () => ({
  type: LIST_ACTIONS.ITEM_CLEAR,
});
