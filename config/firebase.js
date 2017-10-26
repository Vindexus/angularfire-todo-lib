const env             = require('../env');

let config = {};
if(env.dev) {
    config = {
      apiKey: "AIzaSyD30d1HxnH-YGACREoIN-Bh-xLQHmpveLY",
      authDomain: "webpack-todo-dev.firebaseapp.com",
      databaseURL: "https://webpack-todo-dev.firebaseio.com",
      projectId: "webpack-todo-dev",
      storageBucket: "",
      messagingSenderId: "972955233784"
    };
  }
  else if(env.prod) {
    config = {
      apiKey: "AIzaSyDe_wprT0JCqKs6Z8Zu2JE4l1j4fSlhW5U",
      authDomain: "webpack-todo-prod.firebaseapp.com",
      databaseURL: "https://webpack-todo-prod.firebaseio.com",
      projectId: "webpack-todo-prod",
      storageBucket: "",
      messagingSenderId: "574233439530"
    };
  }

module.exports = config;