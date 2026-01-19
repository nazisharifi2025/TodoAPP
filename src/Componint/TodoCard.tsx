"use client"
import { format } from 'date-fns-jalali';
import React from 'react'
type Todo ={
  id:number;
  task:string;
  completed: boolean;
  created_at: Date
}
function TodoCard({todo , toggelTodo}:{todo:Todo , toggelTodo(id:number , completed:boolean):Promise<void>}) {
  return (
       <div key={todo.id} onClick={()=>toggelTodo(todo.id, todo.completed)} className="bg-white border-8 border-black p-5 w-7/12">
         <h1 className={`text-3xl font-bold ${todo.completed? "line-through" : ""} `}> {todo.task}</h1>
         <span className="text-gray-300 w-full flex justify-end">{format(todo.created_at , "yyyy/MM/d/EEEE H:m:s")}</span>
        </div>
  )
}

export default TodoCard