import React from 'react'
import { useState, useEffect } from 'react'
import  {AiOutlineDelete}  from 'react-icons/ai'
import  {CiEdit}  from 'react-icons/ci'
import  {AiOutlineCheckCircle}  from 'react-icons/ai'

const Main = () => {
    const [todoList, setTodoList] = useState([])
    const [input, setInput] = useState('')
    const [editingText, setEditingText] = useState('')
    const [taskToEdit, setTaskToEdit] = useState(null)

    function addItem(newTodo) {

        const newItem = {
            id: 1 + Math.random(),
            value: newTodo
        }

        const list = [...todoList, newItem]

        setTodoList(list)
        setInput('')

    }

    function editItem(newTodo) { 
        const list = [...todoList].map((item) => {
            if(item.id === newTodo.id) {
                item.value = editingText
            }
            return item
        })
        setEditingText('')
        setTodoList(list)
        setTaskToEdit(null)
    }

    function deleteItem(oldTodo) {
        const list = todoList.filter((item) => item.id !== oldTodo.id)
        setTodoList(list)
    }


  return (
    <div className="w-full h-screen bg-sky-200">
        <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full md:flex-row">
            <div className="flex flex-col justify-center rounded-lg w-[450px] bg-red-300      shadow-2xl shadow-slate-600 px-4">               
                <h1 className="flex items-center text-center justify-center py-8 font-semibold text-2xl text-yellow-100">
                    Todo-List    
                </h1>
                <div className="" >
                    
                        <div className="flex flex-col">

                        <div className="flex flex-row px-8">    
                        <input
                            type="text"
                            placeholder='Enter a new task...'
                            required
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            className="h-10 w-[450px] rounded-md p-4 "
                        />

                            <div className="px-4 text-yellow-100">
                                <button onClick={() => addItem(input)} className="bg-gray-400 rounded-lg px-2 h-10 hover:scale-125 duration-300 " >
                                    Add.
                                </button>
                            </div>
                        </div>

                        <div className="py-8 flex flex-col gap-4 items-start px-8 ">
                        {
                        todoList.map((item) => (
                            <div key={item.id} className="flex flex-row gap-4 items-start left-0 rounded-md border border-gray-400 w-[340px] h-10 ">
                               {
                                taskToEdit === item.id
                                ? 
                                (
                                    <input  type="text" 
                                            onChange={(e) => setEditingText(e.target.value)}
                                            value={editingText}
                                            placeholder="Edit task..."
                                            className="bg-white/20 px-4 py-2 border-white-400 rounded-md h-[38px] w-[380px] "

                                    />
                                )
                                :
                                    (
                                        <p className="px-4 py-2 text-gray-400">
                                            {item.value}
                                        </p> 
                                        )
                                }
                        
                                <div className="flex flex-row ml-[14rem] py-2 absolute ">
                                    
                                    
                                    <button onClick={() => editItem(item)} className="mr-2 hover:scale-125 duration-300"> 
                                        <AiOutlineCheckCircle size={20} />
                                    </button>
                                    
                                    <button onClick={() => setTaskToEdit(item.id)} className="mr-2 hover:scale-125 duration-300"> 
                                        <CiEdit size={20} />
                                    </button>

                                    <button onClick={() => deleteItem(item)} className=" hover:scale-125 duration-300">
                                        <AiOutlineDelete size={20} />
                                    </button>
                                </div>

                            </div>
                        ))
                    }
                    </div> 
                    

        
                    </div> 

                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default Main