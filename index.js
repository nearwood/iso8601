
//"2016-09-08T16:03:07.817Z"
//var reISO = /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2}(?:\.\d*))(?:Z|(\+|-)([\d|:]*))?$/;

//Don't need the capture groups
var reISO8601 = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d*)(?:Z|(\+|-)(?:[\d|:]*))?$/;

module.exports = function (value) {
    if (typeof value === 'string') {
        if (reISO8601.exec(value)) {
            return new Date(value);
        }
    }
    return value;
};