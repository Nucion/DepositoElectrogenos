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
    const product =await Product.create({
      Name:name,
      Volume:volume,
      Weight:weight,
      Category:category,
      Supplier:supplier,
    }).fetch();

    res.view('pages/homepage');


  },
  listProduct: async function(req, res){
    const allProducts = await Product.find();
    res.view('pages/Tables',{allProducts});
  },
  newProductView: async function(req,res){
    res.view('pages/Import');
  }

};

