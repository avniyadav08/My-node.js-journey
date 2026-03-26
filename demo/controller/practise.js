const EventEmitter = require('events');
const emitter = new EventEmitter();

emitter.once('start',()=>{
    console.log('Runs Once');
})

emitter.on('greet', () => {
  console.log('Hello!');
});

emitter.emit('greet');

emitter.on('orderPlaced',(id,user)=>{
    console.log(`Order ${id} by ${user}`);
});

emitter.emit('orderPlaced',101,'Akki');

emitter.on('error',(err)=>{   //error handler
    console.log(err.message);
})
emitter.emit('error',new Error('Something broke'));

//removing a listener

function handler(){
    console.log('handled');
}

emitter.on('test',handler);

emitter.off('test',handler); // in place of off we can use removeListner


//listners() - show all listners console.log(emitter.listners('login'));