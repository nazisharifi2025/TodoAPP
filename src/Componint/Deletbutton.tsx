'use client'
function Deletbutton({todo,deleteHandler}:{todo:number,deleteHandler(id:number): Promise<void>}) {
  return (
    <div>
        <button onClick={()=> deleteHandler(todo)} className="px-6 cursor-pointer py-2 text-white font-bold bg-red-400 rounded-md">Delete</button>
    </div>
  )
}

export default Deletbutton