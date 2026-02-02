// function fn() { //function declaration
//   console.log('this is fn')
// }
// fn()
// fn()
// fn()
// fn()
// fn()

// function sum(a,b){ // params
//   // console.log(a+b)
//   return a+b
// }

// let r=sum(1,2) //arguments
// console.log(r)

// function declaration vs function expression

// let a=function(){ // function expression
//   console.log('anonyms function')
// }
// a()

// let b=()=>{
//   console.log('arrow function')
// }
// b()

// normal()
// a()

// function normal(){
//   console.log('normal function')
// }
// let a=function(){ // function expression
//   console.log('anonyms function')
// }


//callbackfn


// function fn1(cb){
//   console.log('htis is fn1')
//   cb()
// }
// // function fn2(){
// //   console.log('fn2')
// // }
// fn1(()=>{
//   console.log('fn2')
// })

// mongoose.connect(()=>{
// })
// let 
// addEventListener('click',()=>{
// })


// higher order function
// function fn1(){
//   return function(){}
// }
// fn1(fn2)

//closer 
// function fn1(){
//   let a=5 //lexical scope
//   return function(){
//     console.log(a)
//     a++
//   }
  
// }

// let a=fn1()
// a()
// a()
// a()


//currying
// function sum(a){
//   return function(b){
//     return function(c){
//       return a+b+c
//     }
//   }
// }
// console.log(sum(1)(2)(3))

//execution of js

let r=10
function fn1(){
  let a=1
  console.log('this is fn',a)
  fn2()
}
function fn2(){
  let a=2
  console.log('this is fn',a)
  fn3()
}
function fn3(){
  let a=3
  console.log('this is fn',a)
}

fn1()
console.log(r)

