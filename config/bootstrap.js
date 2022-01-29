/**
 * Seed Function
 * (sails.config.bootstrap)
 *
 * A function that runs just before your Sails app gets lifted.
 * > Need more flexibility?  You can also create a hook.
 *
 * For more information on seeding your app with fake data, check out:
 * https://sailsjs.com/config/bootstrap
 */

module.exports.bootstrap = async function() {
  sails.argon2 = require('argon2');

  // By convention, this is a good place to set up fake data during development.
  //
  // For example:
  // ```
  // // Set up fake development data (or if we already have some, avast)
  if (await User.count() > 0) {
    console.log('Base no vacia');
    return;
  }
  console.log('Base vacia');
  await User.createEach([
    { email: 'ry@example.com',
      Name: 'Ryan Dahl',
      password: await sails.argon2.hash('HolaMundo1'),
      TelNumber: '351324869',
      Address: 'Cordoba'},

    { email: 'nicolaslesz@hotmail.com',
      Name: 'Nicolas Leszezyñski',
      password: await sails.argon2.hash('claveNico'),
      TelNumber: '3513095969',
      Address: 'Cordoba'},

    { email: 'martinalizceballos@gmail.com',
      Name: 'Martina Ceballos',
      password: await sails.argon2.hash('claveMarti'),
      TelNumber: '3516511761',
      Address: 'Cordoba'},

    { email: 'rachael@example.com',
      Name: 'Rachael Shaw',
      password: await sails.argon2.hash('HolaMundo2'),
      TelNumber: '351324868',
      Address: 'Cordoba' },
  ]);

  await Product.createEach([
    {
      Name:'Motor XL54s',
      Weight:'125',
      Volume:'800',
      Supplier:'Generco',
      Category:'Motor'


    }
  ]);
  await Purchase.createEach([
    {
        Amount: '8900',
        Discount: '5',
        Final_Price:'8455',
        product:await Product.findOne({id: 1}),
        IsSold:true,
        type: "purchase",


    }
  ]);
  await Sale.createEach([
    {
        mount: '10000',
        Client:'Cliente',
        Profit:'1545',
        DepositedTime: 1,
        purchase:await Purchase.findOne({id: 1}),
        type:"sale"


    }
  ]);



};
