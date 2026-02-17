

const {EventEmitter}=require('events')
const myEvent=new EventEmitter()


// myEvent.on('greet',(data)=>{
//     console.log(data)
// })

// myEvent.emit('greet','good morning')


myEvent.on('event2',(data)=>{
    console.log(data)
})

myEvent.on('event1',()=>{
    console.log('event1 runs...')
    myEvent.emit('event2','this is event2')
})

myEvent.emit('event1')





