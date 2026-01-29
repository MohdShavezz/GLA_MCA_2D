//var > let > const  

// var a=10
// var a=5 

// let a=10
// a=5

// const a=10
// // a=5

// hoisting
// console.log(a)
// var a=10

// var a=undefined 
// console.log(a)
// var a=10

// scope 
//global
// function fn() { //fn scope
  
//   // var:functional scope, const ,let=> block scope
//   let a=10 
//   if(true){  //block scope
//     a=5
//     console.log(a)
//   }else{
//     console.log('else',a)
//   }
  
//   console.log(a)
  
// }
// fn()


// function fn(i){
//   setTimeout(() => {
//     console.log(i);
//   }, 1000);
// }
// for (var i = 1; i <= 3; i++) {
//   fn(i)
// }

let x = 5;
{
  let x = 10;
  console.log(x);
}
console.log(x);



