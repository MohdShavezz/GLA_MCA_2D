// let userObj={
//   firstname:"John",
//   lastname:"doe",
//   contact:{
//     phone:9989898980
//   }
// }
// Object.assign(userObj,{isActive:true})
// let userObj2={isActive:true,...userObj}
// delete obj.key
// console.log({...userObj2,lastname:'changelastname'})

// let userObj2=userObj
// let userObj2={...userObj}
//shallow vs deep
// let userObj2=JSON.parse(JSON.stringify(userObj))
// userObj2.firstname='changefirsttname'
// userObj2.contact.phone=999999
// console.log(userObj)
// console.log(userObj2)



// let arr=[1,2,3,[4,5]]
// // let arr2=[...arr]
// let arr2=JSON.parse(JSON.stringify(arr))
// arr2[3][0]=0
// console.log(arr)
// console.log(arr2)

// let userObj={
//   firstname:"John",
//   lastname:"doe",
//   contact:{
//     phone:9989898980
//   },
//   // greet(){
//   //   // console.log(this)
//   //   console.log(`Hello ${this.firstname} ${this.lastname}`)
//   // }
// }
// function greet(grt){
//     console.log(`${grt} ${this.firstname} ${this.lastname}`)
//   }

// // userObj.greet()

// //call apply bind
// greet.call(userObj,'Hello')
// greet.apply(userObj,['Hello'])
// greet.bind(userObj,'Hello')()


// Object.seal():
// Object.seal() is a method that seals an object, preventing the addition or deletion of properties, 
// while allowing the modification of existing properties.
// console.log(userDetails.isSealed(person)); // Output: false

// Object.freeze():
// Object.freeze() is a method that freezes an object, making it completely immutable.
// Frozen objects are read-only, and no modifications, additions, or deletions of properties are allowed.
// Object.isFrozen(userDetails) // false
// let obj=Object.freeze(userDetails) 
// obj.firstname='change' // not allowed



let arr = [1, 1, 2, 3, 4, 4, 5, 6]
// output: {'1':2,'2':1,'3':1,'4':2,'5':1,'6':1}

let obj={}
for(let i of arr){
  if(!obj.hasOwnProperty(i)){
    obj[i]=1
  }else{
    obj[i]+=1
  }
}
console.log(obj)
