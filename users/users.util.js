const db                    = require('../firebase/firebase.ref');
const fbUtil                = require('../firebase/firebase.util');
const _                     = require('lodash');

function Factory () {
  this.usersRef = db.child('users');

  this.addUser = (user) => {
    console.log('need to add this user', user);
    return user;
  }
}

module.exports = new Factory();