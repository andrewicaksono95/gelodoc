function errorHandler(err, req, res, next) {
    console.log(err)
    res.status(500).send(err.message || 'Internal Server Error')
}

module.exports = errorHandler