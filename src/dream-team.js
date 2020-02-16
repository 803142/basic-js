module.exports = function createDreamTeam( members ) {
  return Array.isArray(members)? members
  .filter(word=> typeof word === 'string')
  .map(cur=> {
    return cur.toUpperCase().replace(/\s/g, "")
  })
  .reduce((acc,cur)=> {
    return acc + cur[0]
  } ,'')
  .split('')
  .sort()
  .join('')
  : false;
};