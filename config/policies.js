/**
 * Policy Mappings
 * (sails.config.policies)
 *
 * Policies are simple functions which run **before** your actions.
 *
 * For more information on configuring policies, check out:
 * https://sailsjs.com/docs/concepts/policies
 */

module.exports.policies = {

  /***************************************************************************
  *                                                                          *
  * Default policy for all controllers and actions, unless overridden.       *
  * (`true` allows public access)                                            *
  *                                                                          *
  ***************************************************************************/
  ProductController:{
    newProduct:'isLoggedIn',
    newProductView:'isLoggedIn'
  },

  PurchaseController: {
    redirect: 'isLoggedIn',
    newPurchase: 'isLoggedIn'
  },
  SaleController: {
    redirect: 'isLoggedIn',
    newSale: 'isLoggedIn'
  },

  // '*': true,

};
