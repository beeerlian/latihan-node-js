const customer = require("../controllers/customer.controller")




const customerRoute = function (app) {
       app.use(function (req, res, next) {
              res.header(
                     "Access-Control-Allow-Headers",
                     "x-access-token, Origin, Content-Type, Accept"
              );
              next();
       })
       app.get('/customer', customer.get)
}

module.exports = 
       customerRoute
