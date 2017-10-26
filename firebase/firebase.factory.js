'use strict';

const Firebase        = require('firebase');
const config          = require('../config/firebase');

/* @ngInject */
function FirebaseFactory() {
  //Don't initialize it twice
  if(Firebase.apps && Firebase.apps.length > 0) {
    return Firebase;
  }
  

  Firebase.initializeApp(config);
  return Firebase;
}

module.exports = FirebaseFactory;