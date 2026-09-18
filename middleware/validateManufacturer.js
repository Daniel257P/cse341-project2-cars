const validator = require('../utils/validate');

const saveManufacturer = (req, res, next) => {
  const validationRule = {
    name: 'required|string',
    country: 'string',
    foundedYear: 'integer',
    website: 'url'
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
  saveManufacturer
};
