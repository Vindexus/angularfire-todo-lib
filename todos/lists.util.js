var Ref = require('../firebase/firebase.ref');
function Factory () {
  this.listsRef = Ref.child('lists');

  this.addList = function (name) {
    name = name || "";
    return this.listsRef.push({
      name: name
    })
  }
}

module.exports = new Factory();