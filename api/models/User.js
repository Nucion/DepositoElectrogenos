/**
 * User.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    Name: {
      type:'string'
    },
    email: {
      type:'string',
      required: true
    },
    password: {
      type:'string'
    },
    TelNumber: {
      type:'number'
    },
    Address: {
      type:'string'
    },
  },

};

