const errorHandler = {
    dev() {
        return function(err, req, res, next) {
            res.status(err.status || 500);
            res.render('error', {
                message: err.message,
                error: err,
                title: 'error'
            });
        }
    },
    prod() {
        return function(err, req, res, next) {
            res.status(err.status || 500);
            res.render('error', {
                message: err.message,
                error: {},
                title: 'error'
            });
        }
    }
}

module.exports = errorHandler;
