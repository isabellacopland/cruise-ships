function Ship(port) {
    this.currentPort = (port);
};

Ship.prototype = { setSail () {
   this.currentPort = null
    }, 
    dock(port) {
    this.currentPort = port;
    },
};


module.exports = Ship;
