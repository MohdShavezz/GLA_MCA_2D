// let str='hello words'
// //indexed, immutable
// str[0]='m'
// console.log(str)
// console.log(str.toUpperCase())
// console.log(str.toLowerCase())
// console.log(str.length)
// let tr=str.trim()
// console.log(tr.trimStart().length) //trimEnd, trimStart, trim

// console.log(str.replace('l','m'))
// console.log(str.replaceAll('l','m'))


// "JavaScript".includes("aa"); // false
// "JavaScript".startsWith("java"); // false
// "JavaScript".endsWith("ipt");    // 

// slice (str) vs splice (arr)
// let str='hello words'
// console.log(str.slice(0,)) //'hello words'
// console.log(str.slice(0,1)) //'h'
// console.log(str.slice(6,11)) //'words'
// console.log(str.slice(-5,)) //'words'

// splice 
// let arr=[1,2,3,4]
// // replace index 1 value with 7
// //splice(ind,numOfEleToBDeleted,elesToBInserted)
// // let r=arr.splice(1,1,7)
// arr.splice(1,1,7)
// // arr.splice(2,0,9,10)
// console.log(arr)

// "hello".indexOf("l");      // 2
// "hello".lastIndexOf("l"); // 3
// let fname='john'
// let lname='doe'
// console.log(fname+ " "+lname)
// console.log(`${fname} ${lname} salfj ${4+7}`)
// let r=fname.concat(' ',lname)
// console.log(r)

// let s = "hi i am tom"; 
// let sp=s.split('')
// console.log(sp)
// console.log(sp.reverse()) //Array
// console.log(sp.join(''))
// console.log(s.split(' ').reverse().join(' '))

// let str='hello words'
// console.log(str.includes('he'))
// console.log(str.indexOf('lnj'))  // -1 if nofind

let s = "hello"; //Hello
console.log(s[0].toUpperCase()+s.slice(1,))
