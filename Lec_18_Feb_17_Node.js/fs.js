const fs = require('fs')

// fs.readFile('file.txt',(err,data)=>{
//     if(err) throw err;
//     console.log(data)//<Buffer 74 68 69 73 20 69 73 20 74 65 78 74 20 66 69 6c 65>
//     console.log(data.toString())
// })

// fs.writeFile('file2.txt', 'new update', (err) => {
//   if (err) throw err;
//   console.log('The file has been written!');
// });

// fs.appendFile('file2.txt', 'data to append', (err) => {
//   if (err) throw err;
//   console.log('The "data to append" was appended to file!');
// });


// stream
const readableStream=fs.createReadStream('file.txt')
// const writableStream=fs.createWriteStream('file3.txt')
const writableStream=fs.createWriteStream('file3.txt',{
    flags:'a'
})

// readableStream.on('data',(chunk)=>{
//     console.log(chunk)
//     console.log(chunk.toString())
// })

// readableStream.on('error',err=>{
//     console.log('Error: ',err)
// })

// readableStream.on('end',()=>{
//     console.log('End runs..')
// })

writableStream.write('this is file3')


