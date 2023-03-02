const { ApiError } = require('../utils/errors');

const errorHandler = (error, _req, res, next) => {
  console.error('errorHandler middleware:', error);

  let apiError = error;

  if (!(error instanceof ApiError)) {
    apiError = new ApiError({ reason: error });
  }

  if (res.headersSent) {
    return next(apiError);
  }

  return res.status(apiError.httpStatus).json(apiError);
};

module.exports = { errorHandler };
