"use client"
import { format } from 'date-fns-jalali';
import Deletbutton from './Deletbutton';
type Todo ={
  id:number;
  task:string;
  completed: boolean;
  created_at: Date
}
function TodoCard({todo , toggelTodo,deleteHandler}:{todo:Todo , toggelTodo(id:number , completed:boolean):Promise<void>,deleteHandler(id:number):Promise<void>}) {
  return (
       <div key={todo.id} onClick={()=>toggelTodo(todo.id, todo.completed)} className="bg-white cursor-pointer hover:-translate-y-1.5 hover:shadow-md shadow-gray-400 transition-all flex flex-col gap-4 duration-600 border-8 border-black p-5 w-7/12">
         <h1 className={`text-3xl font-bold ${todo.completed? "line-through" : ""} `}> {todo.task}</h1>
         <div className='flex w-full  justify-between items-center px-3'>
         <span className="text-gray-300 w-full flex ">{format(todo.created_at , "yyyy/MM/d/EEEE H:m:s")}</span>
         <Deletbutton deleteHandler={deleteHandler} todo={todo.id} />
         </div>
        </div>
  )
}

export default TodoCard