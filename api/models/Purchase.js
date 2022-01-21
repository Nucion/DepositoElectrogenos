/**
 * Purchase.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    Amount:'number',
    Discount:'number',
    Final_Price:'number',
    IsSold:'boolean',
    productName:'string',
    type: 'string'

  },
  product: {
    model:'Product'
  },
  sale:{
    model:'Sale',
    unique: true
  }
};

