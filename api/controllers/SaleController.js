/**
 * SaleController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  newSale: async function(req,res){
    const productId =req.param('productId');
    const amount = req.param('monto');
    const client = req.param('cliente');
    const purchase = await Purchase.findOne({id: req.param('purchaseId')});
    const time =  Math.round((new Date()).getTime() / 1000)- purchase.createdAt;
    const gain = amount - purchase.amount;
    const sale = await  Sale.create({
      amount: amount,
      client:client,
      profit:gain,
      DepositedTime: time,
      purchase:purchase
    }).fetch();
    await Purchase.update({
      id:purchase.id
    }).set({
      isSold:true
    })
    res.redirect('/');
  },
  redirect: async function(req,res){
    const productId =req.param('productId');
    let purchases = await Purchase.find({
      product: productId,
      isSold: false
    })
    // eslint-disable-next-line eqeqeq
    if(purchases.length!=0){
      const stock = true;
      const purchase1 = purchases[0];
      res.view('pages/Sell',{productId,stock, purchase1});
    }else{
      const stock = false;
      res.view('pages/Sell',{productId,stock});

    }
  }
};

