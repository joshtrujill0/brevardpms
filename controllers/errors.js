const AppError = require("../utilities/error");

const handleAxiosError = (err) =>
  err.response.status === 401
    ? new AppError("Invalid Rentec API Key", 401)
    : new AppError("Unknown error occured", 500);

module.exports = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || "error";

  if (err.name === "AxiosError") err = handleAxiosError(err);

  res.status(err.statusCode).json({
    status: err.status,
    message: err.message,
  });
};
