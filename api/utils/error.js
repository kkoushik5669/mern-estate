export const errorHandler = (statusCode, message) => {
  //we have statusCode and message in our detailed errors
    const error = new Error();
    error.statusCode = statusCode;
    error.message = message;
    return error;
  };