//let const 
// arrow function
// closure
// destructing
//----------------------------------------

// Set, Map
// ... spread , rest
// oop
// map filter reduce
// modules
// promise
//-------------------------------------------
// Set, Map
// let arr=[1,2,3,3,4,4]
// let s1=new Set([...arr])
// console.log(s1)
// console.log(Array.from(s1))

// let map=new Map()
// map.set(1,'one')
// map.set('two',2)
// // console.log(map.size)
// // console.log(map)
// // console.log(map.get(1))
// // console.log(map.get('two'))
// // map.delete(1)
// map.clear()
// console.log(map)

// ... spread , rest
// let arr=[1,2,3]
// let arr2=[6,...arr,5]
// console.log(arr2)

// function sum(...r){
//   console.log(r)
//   // console.log(arguments)
//   // console.log(Array.from(arguments))
//   // console.log(Object.values(arguments))
// }
// sum(1,2,3,4)

// oop
// function prototypes
// class Person{
//   #name //public
//   constructor(name){
//     this.#name=name
//   }
//   getName(){
//     return this.#name
//   }
  
// }
// let p1=new Person('tom')
// console.log(p1.getName())

// map filter reduce
let arr=[1,2,3,4,5,6]
// sum of even squares :56
// let even=arr.filter(ele=>ele%2==0)
// let sqrs=even.map(ele=>ele*ele)
// let sum=sqrs.reduce((acc,ele)=>acc+ele,0)

// let sum=arr.filter(ele=>ele%2==0)
// .map(ele=>ele*ele)
// .reduce((acc,ele)=>acc+ele,0)
// console.log(sum)

// modules

// promise

// setTimeout(function() {
//   console.log('order')
//     setTimeout(function() {
//     console.log('process')
//       setTimeout(function() {
//       console.log('deliver')
//     }, 1000);
//   }, 2000);
// }, 3000);

// function order(processCB){
//   console.log('order')
//   processCB(deliver)
// }
// function process(deliverCB){
//   console.log('process')
//   deliverCB()
// }
// function deliver(){
//   console.log('deliver')
// }
// order(process)

//Promised 
// Promise:{pending,resolve,reject}

let order=new Promise((res,rej)=>setTimeout(()=>res('order resolve.'), 1000))
let process=new Promise((res,rej)=>setTimeout(()=>res('process resolve.'), 2000))
let deliver=new Promise((res,rej)=>setTimeout(()=>res('deliver resolve.'), 3000))
// console.log(order) //pending

// .then.catch
// order
// .then((data)=>console.log('then:',data))
// .catch(error=>console.log('error:',error))

// order.then(orderData=>{
//   console.log(orderData)
//   return process
// }).then(processData=>{
//   console.log(processData)
// }).then(deliverData=>{
//   console.log(deliverData)
//   return deliver
// }).catch((error)=>{
//   console.log('error:',error)
// })

//async await 

function fn(){
  let orderRes=await order
  console.log(orderRes)
  let processRes=await process
  console.log(processRes)
  let deliverRes=await deliver
  console.log(deliverRes)
}
fn()