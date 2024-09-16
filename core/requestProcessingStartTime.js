function requestProcessingStartTime(req, res, next) {
    const time = Date.now();
    req.time = time;
    next();
};

module.exports = requestProcessingStartTime;
