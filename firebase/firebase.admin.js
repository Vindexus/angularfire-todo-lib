const admin = require('firebase-admin');
const config = require('../../firebase-admin.json');

module.exports = admin.initializeApp({
  credential: admin.credential.cert(config),
  databaseURL: "https://webpack-todo-dev.firebaseio.com"
});