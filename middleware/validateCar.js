const validator = require('../utils/validate');

const saveCar = (req, res, next) => {
  const validationRule = {
    manufacturer: 'required|string',
    model: 'required|string',
    year: 'required|integer',
    engineType: 'required|string',
    transmission: 'required|string',
    color: 'required|string',
    price: 'required|numeric',
    mileage: 'required|numeric',
    fuelType: 'required|string'
  };

  validator(req.body, validationRule, {}, (err, status) => {
    if (!status) {
      res.status(412).json({
        success: false,
        message: 'Validation failed',
        data: err
      });
    } else {
      next();
    }
  });
};

module.exports = {
  saveCar
};
