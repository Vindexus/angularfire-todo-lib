const Ref             = require('../firebase/firebase.ref');
const fbUtil          = require('../firebase/firebase.util');

function ListFactory (listId) {
  this.listRef = Ref.child('lists/' + listId);
  this.itemsRef = Ref.child('items/' + listId);

  this.addItem = function (text) {
    text = text || "";
    return this.itemsRef.push({
      text: text,
      done: false
    });
  }


  this.updateItem = function (item) {
    const ref = this.getItemRef(item);
    const save = fbUtil.cleanSave(item);
    return ref.update(save);
  }

  this.getItemRef = function (item) {
    const itemId = typeof(item) == 'string' ? item : item.$id;

    return this.itemsRef.child(itemId);
  }
}
ListFactory.managers = {};

module.exports = function (listId) {
  if(!ListFactory.managers[listId]) {
    ListFactory.managers[listId] = new ListFactory(listId);
  }
  return ListFactory.managers[listId];
}