const errorHandler = (err, req, res, next) => {
    console.error(err.stack);
    res.status(err.status || 500).send({
        error: err.status === 404 ? 'Not Found' : 'Something went wrong!',
        message: err.message || 'Internal Server Error'
    });
};
module.exports = errorHandler;