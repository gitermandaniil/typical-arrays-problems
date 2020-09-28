const isValid = arr => arr && arr.length

exports.min = arr => isValid(arr) ? Math.min.apply(null, arr) : 0
exports.max = arr => isValid(arr) ? Math.max.apply(null, arr) : 0
exports.avg = arr => isValid(arr) ? arr.reduce((a, b) => a + b) / arr.length : 0
