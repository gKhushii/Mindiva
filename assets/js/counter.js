// counter.js
function incrementCounter(current, target, step = 1) {
    return Math.min(current + step, target);
}

module.exports = { incrementCounter };
