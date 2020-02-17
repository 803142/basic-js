module.exports = function repeater(str, options) {
    const {repeatTimes, separator='+', addition='', additionRepeatTimes, additionSeparator=''} = options;
    const add = ''+addition;
    return Array(repeatTimes)
        .fill(str+Array(additionRepeatTimes).fill(add).join(additionSeparator))
        .join(separator)
};
  