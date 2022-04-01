const EventEmitter = require('events');
class MyEmitter extends EventEmitter {};

const Emitter = new MyEmitter();

Emitter.on("Help", ()=>{   
    setTimeout(() => {
        console.log('Please somebody Help Me');
    }, 5000);
});

Emitter.emit("Help");