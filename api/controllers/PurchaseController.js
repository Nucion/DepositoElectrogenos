/**
 * PurchaseController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
   newPurchase: async function(req,res){
     const productId =req.param('productId');
     const amount = req.param('monto');
     const discount = req.param('descuento');
     const finalPrize = amount -amount*discount/100;

     const purchase = await Purchase.create({
       amount: amount,
       discount: discount,
       finalPrize:finalPrize,
       product:productId,
       isSold:false
     }).fetch();
     res.redirect('/');
   },
  redirect: async function(req,res){
    const productId =req.param('productId');

    res.view('pages/Buy',{productId});
  }
};

