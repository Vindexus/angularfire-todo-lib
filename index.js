module.exports = {
  env: require('./env'),
  firebase: {
    factory: require('./firebase/firebase.factory'),
    auth: require('./firebase/firebase.auth'),
    util: require('./firebase/firebase.util'),
    ref: require('./firebase/firebase.ref')
  },
  listUtil: require('./todos/list.util'),
  listsUtil: require('./todos/lists.util'),
  usersUtil: require('./users/users.util'),
  firebaseConfig: require('./config/firebase')
}