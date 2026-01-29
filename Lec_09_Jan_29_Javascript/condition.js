//condition

// truthy : true, 'string',[],'0'
// falsy :false, 0, -0, "",null,'undefined'

// if(false){
//   console.log('true runs')
// }else{
//   console.log('false runs')
// }
//ternary
// cond?true:false
// let cond=0
// cond?console.log('true run'):console.log('false run')

// if(cond){
//   console.log('simple if')
// }

// if(console) console.log('simple if')

// cond&&console.log('simple if')



// let ope='/'
// let a=5,b=10 
// if(ope=='+'){
//   console.log(a+b)
// }else if(ope=='-'){
//   console.log(b-a)
// }else if(ope=='*'){
//   console.log(b*a)
// }else{
//   console.log('invalid')
// }
// let ope='*'
// let a=5,b=10 
// switch (ope) {
//   case '+':
//     console.log(a+b)
//     break;
//   case '-':
//     console.log(b-a)
//     break;
//   case '*':
//     console.log(a*b)
//     break;
//   default:
//   console.log('invalid')
//     // code
// }

// for (var i = 0; i < 5; i++) {
//   if(i==2) continue
//   console.log(i)
// }


// let a=0
// let b=1
// let c=1 
// let d=1 

// console.log( (a||b) ||  (c||d) ) // 1 || 1 1
// console.log( (a||b) &&  (c||d) ) //  1
// console.log( (a&&b) ||  (c||d) )
// console.log( (a||b) ||  (c&&d) )
// console.log( (a&&b) ||  (c&&d) )
// console.log( (a&&b) &&  (c&&d) )

// console.log(a&&b&&c&&d)


// nullish 
// let a=null 
// let b=undefined
// if(a==undefined||a==null){
//   console.log('invalid')
// }
// a??console.log('invalid')
