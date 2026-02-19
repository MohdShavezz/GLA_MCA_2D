import http from 'http'


const users=[
    {id:2,name:'siya',age:21},
    {id:1,name:'tom',age:22},
    {id:3,name:'manish',age:20}
]
const app=http.createServer((req,res)=>{
    // console.log(req.method)
    // console.log(req.url)
    if(req.method==='GET'&& req.url==='/'){
       res.end('this is default route') 
    }else if(req.method==='GET'&& req.url==='/users'){
        res.end(JSON.stringify(users))
    }else if(req.method==='POST'&& req.url==='/users'){//localhost:5000/users + payload
        let body=''
        req.on('data',(chunk)=>{
             body+=chunk.toString()
        })
        req.on('end',()=>{
            let user=JSON.parse(body)
            let obj={
                id:users.length>0?users.length+1:1,
                ...user
            }
            users.push(obj)
            res.end(JSON.stringify(users))
        })
    }else if(req.method==='DELETE' && req.url.includes('/users/')){ //localhost:5000/users/1
        const userId=+req.url.split('/')[2]
        const ind=users.findIndex(ele=>ele.id===userId)
        users.splice(ind,1)
        res.end(JSON.stringify(users))
    }else if(req.method=='GET'&&  req.url.includes('/users/') ){//localhost:5000/users/1
        const userId=+req.url.split('/')[2]
        const user= users.find(ele=>ele.id===userId)
        res.end(JSON.stringify(user))
    }else if(req.method=='PUT'&&  req.url.includes('/users/')){ //localhost:5000/users/1 + payload
        const userId=+req.url.split('/')[2]
        const ind=users.findIndex(ele=>ele.id===userId)

         let body=''
        req.on('data',(chunk)=>{
             body+=chunk.toString()
        })
        req.on('end',()=>{
            let userObj=JSON.parse(body)
            let obj={
                id:userId,
                ...userObj
            }
            users[ind]=obj
            res.end(JSON.stringify(users))
        })

    }
})


const port=process.env.PORT || 3000
app.listen(port,()=>{
    console.log('server is running on: ',port)
})