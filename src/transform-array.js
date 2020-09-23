module.exports = function transform(arr) {
    if (!Array.isArray(arr)) throw new Error();
    const result = [];
    let discard = null;

    for (let i = 0; i < arr.length; i+=1) {
        const conditionPrev = !!(result.length && discard !== i - 1);
        const conditionNext = !!(i < arr.length - 1);
        switch(arr[i]) {
            case '--discard-next':
              discard = i + 1;
              i+=1;
              break;
            case '--discard-prev':
              if (conditionPrev) result.pop(arr[i]);
              break;
            case '--double-next':
              if (conditionNext) result.push(arr[i+1]);
              break;
            case '--double-prev':
              if (conditionPrev) result.push(result[result.length-1]);
              break;
            default:
              result.push(arr[i]);
          }
    }
    return result;
};
