class ApiError extends Error {
  constructor({
    message = 'There was an unexpected error.',
    code = 'UNEXPECTED_ERROR',
    httpStatus,
    reason = null,
  } = {}) {
    // Pass the given message to the parent Error class, or if no message was given use the message from the passed in
    // cause error, or use a default message.
    super(message);
    // This will be the name of this class.
    this.name = this.constructor.name;
    // A unique identifier
    this.code = code;
    // If this error was created from another error.
    this.reason = reason;
    this.httpStatus = httpStatus;

    if (!httpStatus) {
      this.httpStatus = 500;

      console.log(reason.name);
      if (reason instanceof Error && reason.name === 'ValidationError') {
        this.httpStatus = 400;
      }
    }

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, this.constructor);
    }
  }

  // An Error instance will turn into an empty object if passed to res.json or JSON.stringify without adding this.
  toJSON() {
    const errorJson = {
      message: this.message,
      code: this.code,
    };

    if (this.reason && this.reason.message) {
      errorJson.reason = { message: this.reason.message };
    }

    return errorJson;
  }
}

module.exports = {
  ApiError,
};
