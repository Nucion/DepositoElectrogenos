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
    const gain = amount - purchase.Amount;
    const sale = await  Sale.create({
      Amount: amount,
      Client:client,
      Profit:gain,
      DepositedTime: time,
      purchase:purchase,
      type:"sale"
    }).fetch();

    await Purchase.update({
      id:req.param('purchaseId')
    }).set({
      IsSold: true
    })
    res.redirect('/');
  },
  redirect: async function(req,res){
    const productId =req.param('productId');

    let purchases = await Purchase.find({
      IsSold: false
    })
    for(let i of purchases){
      // eslint-disable-next-line eqeqeq
      if(i.product.id==productId){
        const stock = true;
        const purchase1 = i;
        return res.view('pages/Sell',{productId,stock, purchase1});
      }
    }
      const stock = false;
      res.view('pages/Sell',{productId,stock});

  },

  details: async function(req,res){
    const saleId =req.param('saleId');
    const sale = await Sale.findOne({id:saleId})
    res.view('pages/SaleDetails',{sale});

  },
};

