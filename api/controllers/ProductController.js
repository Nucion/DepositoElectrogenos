/**
 * ProductController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  newProduct: async function(req,res){
    const name =req.param('name');
    const volume =req.param('volume');
    const weight =req.param('weight');
    const category =req.param('category');
    const supplier =req.param('supplier');
    if( await Product.findOne({
      Name:name,
      Volume:volume,
      Weight:weight,
      Category:category,
      Supplier:supplier,
    })){
      const error = true;
      res.view('pages/Import',{error});
    }
    else{

      const product =await Product.create({
        Name:name,
        Volume:volume,
        Weight:weight,
        Category:category,
        Supplier:supplier,
      }).fetch();
    }


    const allProducts = await Product.find();
    const stock = await Purchase.find({
      IsSold:false
    });
    res.view('pages/Tables',{allProducts,stock});


  },
  listProduct: async function(req, res){
    const allProducts = await Product.find();
    const stock = await Purchase.find({
      IsSold:false
    });
    res.view('pages/Tables',{allProducts,stock});
  },
  newProductView: async function(req,res){
    const error =false;
    res.view('pages/Import',{error});
  },

};

