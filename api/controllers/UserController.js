/**
 * UserController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  login: async function(req,res){
    const email =req.param('email');
    const contrasena=req.param('contrasena');
    const user= await User.findOne({
      email:email,
    });
    if(user && await sails.argon2.verify(user.password, contrasena)){
      req.session.user=user;
    }else{
      req.session.user=null;
    }
    res.redirect('/');

  },
  logout: async function(req, res){
    req.session.user=null;
    res.redirect('/');
  },
  historial: async function(req, res){

  const allSales = await Sale.find();
  const allPurchases = await Purchase.find();
  const allTransactions = allSales.concat(allPurchases);
  const allTransactions2 = allTransactions.sort(function(a,b){
      return b.createdAt - a.createdAt;
    })

  res.view('pages/Historial',{allTransactions2});
}
};

