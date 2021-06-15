/**
 * ProductController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  newProduct: async function(req,res){
    const name =req.param('name');
    const code =req.param('code');
    const weight =req.param('weight');
    const brand =req.param('brand');
    const arrivaldate =req.param('date');
    const product =await Product.create({
      Name:name,
      Code:code,
      Weight:weight,
      Brand:brand,
      ArrivalDate:arrivaldate,
    }).fetch();

    res.send(JSON.stringify(product));


  },
  listProduct: async function(req, res){
    const allProducts = await Product.find();
    res.view('pages/homepage',{allProducts});
  },
  newProductView: async function(req,res){
    res.view('pages/Import');
  }

};

