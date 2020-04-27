
exports.min = function min (array) {
  let isArray = array ? array : [];
 
  if(isArray.length === 0) {
    return 0
  }

  if(isArray.length > 0) {
    let min = Math.min(...isArray);
    return min
  }
}

exports.max = function max (array) {
  let isArray = array ? array : [];
 
  if(isArray.length === 0) {
    return 0
  }

  if(isArray.length > 0) {
    let max = Math.max(...isArray);
    return max
  }
}

exports.avg = function avg (array) {
  let isArray = array ? array : [];
 
  if(isArray.length === 0) {
    return 0
  }

  if(isArray.length > 0) {
    let avarage = isArray.reduce((a,b) => a + b, 0) / isArray.length;
    return avarage
  }
}
