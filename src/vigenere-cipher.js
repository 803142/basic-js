class VigenereCipheringMachine {
    constructor (forward = true) {
        this.forward = forward;
        this.abc = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    }

    encrypt(message, key) {
        if (!message || !key) throw Error();
		let cypher = '';
        let messageReady = message.toUpperCase();
        let keyReady = key.toUpperCase();
        let nonABC = 0;
		for(let i =0; i<messageReady.length; i++) {
			if (!messageReady[i].match(/[A-Z]/)) {
                nonABC += 1;
				cypher += messageReady[i];
			} else {
                cypher += this.abc.charAt((this.abc.indexOf(messageReady.charAt(i)) + this.abc.indexOf( keyReady.charAt((i-nonABC) % keyReady.length))) % this.abc.length)
			}
        }
        return this.forward? cypher : cypher.split('').reverse().join('');
	}

    decrypt(message, key) {
        if (!message || !key) throw Error();
        let cypher = '';
        let messageReady = message.toUpperCase();
        let keyReady = key.toUpperCase();
        let nonABC = 0;
        for (let i=0; i < messageReady.length; i+=1 ) {
            if (!messageReady[i].match(/[A-Z]/)) {
                nonABC += 1;
                cypher += messageReady[i];
            } else {
                cypher += this.abc.charAt(((this.abc.indexOf(messageReady.charAt(i))+ this.abc.length) - this.abc.indexOf( keyReady.charAt((i-nonABC) % keyReady.length))) % this.abc.length)
            }
        }
        return this.forward? cypher : cypher.split('').reverse().join('');
    }
}

module.exports = VigenereCipheringMachine;
