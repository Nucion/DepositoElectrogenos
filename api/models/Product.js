/**
 * Product.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  'attributes': {
    Name: 'string',
    Code: 'number',
    Weight: 'number',
    Brand: 'string',
    ArrivalDate: 'string',

  },

  units: {
    collection: 'Purchase',
    via:'product'
  }

};

