
import FilterData from "@/Componint/FilterData";
import TodoCard from "@/Componint/TodoCard";
import { prisma } from "@/lib/db";
import { startOfDay, startOfMonth, startOfWeek } from "date-fns-jalali";
import { revalidatePath } from "next/cache";
type Todo ={
  id:number;
  task:string;
  completed: boolean;
  created_at: Date
}
export default async function Home({searchParams}:{searchParams:Promise<{filter:string}>}) {
  const {filter} = await searchParams || "all";
  const now = new Date()  || undefined ;
  let FilterDate : Date | undefined ;
  if(filter === "today"){
    FilterDate = startOfDay(now);
  }
  else if(filter === "week"){
    FilterDate = startOfWeek(now);
  }
  else if(filter === "month"){
    FilterDate = startOfMonth(now);
  }
  // shoing data start
  const data:Todo[] =  await prisma.todo.findMany({
    where: FilterDate?{
      created_at: {gte: FilterDate}
    }:undefined 
  });
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
  // shoing data endded
  // delete function
  async function deleteHandler(id:number){
    "use server";
    await prisma.todo.delete({
      where: {id : id}
    })
    revalidatePath('/');
  }
  return (
    <div className=" h-[80vh] overflow-y-scroll w-full  bg-gray-200 my-20 p-12  flex flex-col items-center gap-4">
     <FilterData filter={filter} />
      {dataSort.map((todo)=>(

        <TodoCard key={todo.id} todo={todo} deleteHandler={deleteHandler} toggelTodo={toggelTodo} />
      ))}
    </div>
  );
}
