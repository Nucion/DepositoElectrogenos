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
      res.redirect('/');
    }else{
      req.session.user=null;
      res.redirect('/');
    }

  },
  logout: async function(req, res){
    req.session.user=null;
    res.redirect('/');
  }

};

