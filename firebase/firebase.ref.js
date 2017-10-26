const fb = require('./firebase.factory');
const ref = fb().database().ref();
module.exports = ref;