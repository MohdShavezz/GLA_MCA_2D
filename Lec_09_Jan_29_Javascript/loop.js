//loop
// for, while, dowhile, for of , for in, map VSforeach
// for (var i = 0; i < 5; i++) {
//   // if(i==3) break
//   if( i==3) continue
//   console.log(i)
  
// }

// 1->5
// let i=1
// while(i<=5){
//   console.log(i)
//   i++ 
//   // break
// }

// let arr=[1,2,3,4]
// // console.log(arr[4])
// let i=0
// while(i<arr.length){ //arr[i]!=undefined
//   console.log(arr[i])
//   i++ 
// }

// do{
//   console.log('hi')
// }while(false)


// let arr=[1,2,3,4]
// for (let i of arr){
//   // console.log(i)
// }

// const user={
//   name:'shav',age:22,phone:1111
// }
// for (let i in user){
//   console.log(i,user[i])
// }

// mapVSforeach
let arr=[1,2,3,4]
// arr.forEach((ele,ind,arr)=>{
//   // console.log(ele,ind,arr)
//   if(ind==1){
//     arr[ind]=9
//   }
// })
// console.log(arr)
let arr2=arr.map((ele,ind,arr)=>{
  // console.log(ele,ind,arr)
  return ele*2
})
console.log(arr,arr2)