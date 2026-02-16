import path from 'path'
import url from 'url'

let p= '.dir/dir1/dir2/file.txt'
console.log(path.basename(p))
console.log(path.dirname(p))
console.log(path.extname(p))
console.log(path.join('fol4','node.js'))

const __filename=url.fileURLToPath(import.meta.url)
console.log('__dirname',path.dirname(__filename))