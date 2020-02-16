module.exports = function countCats( matrix ) {
  return matrix.reduce((acc,cury)=>{
    return acc+cury.reduce((accy, curx)=>{
      return curx==="^^"? accy = accy + 1: accy
    },0)
  },0
  )
};
