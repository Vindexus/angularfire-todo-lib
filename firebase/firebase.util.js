const _ = require('lodash');

module.exports = {
  cleanSave: (obj) => {
    let save = _.clone(obj);
    _.each(save, (val, key) => {
      if(key.substr(0, 1) == '$' || val === undefined) {
        delete save[key];
      }
    });

    return save;
  }
}