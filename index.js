const logger = require('./logger');
logger.log('viskas ok');


const EventEmitter = require('events');
const emitter = new EventEmitter();

emitter.on('messageLogged', function(){
    console.log("Gauta");
});
emitter.emit('messageLogged');

emitter.emit('messageLogged', (eventArg) => {
    console.log("Pakviestas", eventArg);
});

emitter.emit('messageLogged', {id:1, url: "nera"});