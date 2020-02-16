module.exports = function getSeason(date) {
  if (!date){
    return 'Unable to determine the time of year!';
  };
  if (Object.prototype.toString.call(date) === '[object Date]'){
    const seasons = {
      'Jan': 'winter',
      'Dec': 'winter',
      'Feb': 'winter',
      'Mar': 'spring',
      'Apr': 'spring',
      'May': 'spring',
      'Jun': 'summer',
      'Jul': 'summer',
      'Aug': 'summer',
      'Sep': 'fall',
      'Oct': 'fall',
      'Nov': 'fall',
    };
    return seasons[date.toString().split(' ')[1]];
  } else {
    throw new Error()
  };
};
