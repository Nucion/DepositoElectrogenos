/**
 * Sale.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    Amount: 'number',
    Profit: 'number',
    Client: 'string',
    DepositedTime:'number',
    type: 'string',
  },
  purchase:{
    collection:'purchase',
    via:'sale',
}
};

