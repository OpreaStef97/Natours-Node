class AppError extends Error {
    constructor(message, statusCode) {
        super(message);

        this.statusCode = statusCode;
        this.status = `${statusCode}`.startsWith('4') ? 'fail' : 'error';
        this.isOperational = true;

        // for not poluting err .stack property
        Error.captureStackTrace(this, this.constructor);
    }
}

module.exports = AppError;
