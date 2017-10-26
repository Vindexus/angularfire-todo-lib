const fb = require('./firebase.factory');
const auth = fb().auth()
module.exports = function () {
  return auth;
};