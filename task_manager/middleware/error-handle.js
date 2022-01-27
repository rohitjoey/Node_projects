const errorHandler = (err, req, res, next) => {
  return res.status(500).json({ errorMessage: err });
};

module.exports = errorHandler;
