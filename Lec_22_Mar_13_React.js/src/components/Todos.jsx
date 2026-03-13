import axios from 'axios'
import React, { useEffect, useReducer, useRef, useState } from 'react'

const Todos = () => {

    const [todos, setTodos] = useState([])
    const todoRef=useRef(null)
    const todoIdRef=useRef(null)

    async function fetchTodos() {
        let res = await axios(import.meta.env.VITE_API_URL)
        let todos= res.data
        // let todos = await res.json()
        setTodos(todos.slice(0, 10))

    }



    useEffect(() => {
        fetchTodos()
    }, [])

    // console.log(todos)
    function handleClick(){
        if(todoIdRef){
            // delete  
            let todo= todos.find(ele=>ele.id==todoIdRef.current.value)
            const res=todos.filter(ele=>ele.id!=todoIdRef.current.value)
            setTodos(res)
            return
        }
        if(!todoRef.current.value){
            console.log('add todo!')
            return
        }
        let todoObj= {
            id:todos.length+1,
            title:todoRef.current.value
        }
        todoRef.current.value=''
        setTodos(ele=>[...ele,todoObj])
    }


    return (
        <div>

            <div>
                <h3>Add todo</h3>
                <input ref={todoRef} type="text" name="todo" id="todo" placeholder='todo' />
                <button onClick={handleClick}>Add</button>
            </div>
            <div>
                <h3>Delete todo</h3>
                <input ref={todoIdRef} type="text" name="todoId" placeholder='todoId' />
                <button onClick={handleClick}>Add</button>
            </div>
            <ul>
                {

                    todos.map(ele => (
                        <li key={ele.id}>
                            {ele?.id} {ele?.title}
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Todos
