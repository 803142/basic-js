module.exports = class DepthCalculator {
    calculateDepth(arr) {
        if (Array.isArray(arr)){ 
                let result = arr.map(cur=>this.calculateDepth(cur)).sort((a,b)=>b-a)[0]||0
                return result + 1;               
        } else {
                return 0;
        }
    }
};