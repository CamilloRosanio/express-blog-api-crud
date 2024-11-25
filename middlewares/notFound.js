function notFound(req, res, next) {
    res.status(404);
    res.json({
        status: 'KO',
        error: err.message,
    })
};





// EXPORT
module.exports = notFound;