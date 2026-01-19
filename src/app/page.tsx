import TodoCard from "@/Componint/TodoCard";
import { prisma } from "@/lib/db";
import { format } from "date-fns-jalali";
type Todo ={
  id:number;
  task:string;
  completed: boolean;
  created_at: Date
}
export default async function Home() {
  // const  Data = await prisma.todo.findFirst()
  // const  Data = await prisma.todo.findFirstOrThrow();
  const data:Todo[] =  await prisma.todo.findMany();
  const dataSort = data.sort((a,b)=> Number(a.completed)-Number(b.completed));
  async function toggelTodo(id:number , completed:boolean){
    "use server"
    await prisma.todo.update({
      where: {id : id},
      data:{
        completed : !completed ,
      }
    })
  }
  return (
    <div className="h-screen w-full my-20 bg-linear-to-b p-12 from-gray-100 to-stone-500 flex flex-col items-center gap-4">
      {dataSort.map((todo)=>(
        <TodoCard key={todo.id} todo={todo} toggelTodo={toggelTodo} />
      ))}
    </div>
  );
}
