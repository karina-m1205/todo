function timeCounter(req) {
    const { startTime } = req;
    const endTime = Date.now();
    const spentTime = endTime - startTime;
    return spentTime;
}

module.exports = timeCounter;