const chainMaker = {
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    let message = ''+value;    
    this.chain? this.chain.push(message):this.chain = [message];
    return this;
  },
  removeLink(position) {
    if (this.chain.length-1<position || position<1 || typeof position !== 'number'){
      this.chain = [];
       throw new Error();
      }else{        
        this.chain.splice(position-1,1);        
        return this;
      } 
  },
  reverseChain() {
    this.chain = this.chain.reverse();
    return this;
  },
  finishChain() {
    let result = '( '+this.chain.join(' )~~( ')+' )';
    this.chain = [];
    return result;
  }
};

module.exports = chainMaker;
