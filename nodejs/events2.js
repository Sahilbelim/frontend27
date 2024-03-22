var events = require('events');
var em = new events.EventEmitter();

var switchOn = function (name) {
     console.log("Switch On " + name);
}

var switchOff = function (name) {
     console.log("Switch Off " + name);
}

em.on('switchOnEvent', switchOn)
em.addListener('switchOffEvent', switchOff)

em.emit('switchOnEvent','fan');
em.emit('switchOnEvent','light');

em.emit('switchOffEvent','pc');
em.emit('switchOffEvent','Phone');

em.removeListener('switchOnEvent',switchOn);
em.emit("switchOnEvent",'pc')
em.emit('switchOffEvent','light');
em.emit("switchOnEvent",'laptop')
em.removeListener('switchOffEvent',switchOff);
em.emit('switchOffEvent','fan');