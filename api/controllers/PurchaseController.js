/**
 * PurchaseController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
   newPurchase: async function(req,res){
     const productId =req.param('productId');
     const product = await Product.findOne({id: productId});
     const amount = req.param('monto');
     const discount = req.param('descuento');
     const finalPrice = amount -amount*discount/100;

     const purchase = await Purchase.create({
       Amount: amount,
       Discount: discount,
       Final_Price:finalPrice,
       product:product,
       IsSold:false,
       type: "purchase",
     }).fetch();
     res.redirect('/');
   },
  redirect: async function(req,res){
    const productId =req.param('productId');

    res.view('pages/Buy',{productId});
  },

  details: async function(req,res){
    const purchaseId =req.param('purchaseId');
    const purchase = await Purchase.findOne({id:purchaseId})
    if(purchase.IsSold){
      const sales = await Sale.find();
      for(let i of sales){
        // eslint-disable-next-line eqeqeq
        if(i.purchase.id==purchaseId){
          const sale = i;
          res.view('pages/PurchaseDetails',{purchase, sale});

        }
      }

    }else{
      res.view('pages/PurchaseDetails',{purchase});

    }


  },
};

