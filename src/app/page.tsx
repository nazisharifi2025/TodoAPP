import FilterDate from "@/Componint/FilterDate";
import TodoCard from "@/Componint/TodoCard";
import { prisma } from "@/lib/db";
import { format, startOfDay, startOfMonth, startOfWeek } from "date-fns-jalali";
type Todo ={
  id:number;
  task:string;
  completed: boolean;
  created_at: Date
}
export default async function Home({searchParams}:{searchParams:Promise<{filter:string}>}) {
   const {filter} = await searchParams || "all";
  const now = new Date();
  let filterData: Date | undefined;

  if(filter === "today"){
    filterData = startOfDay(now);
  }
  else if(filter === "week"){
    filterData = startOfWeek(now);
  }
  else if(filter === "month"){
    filterData = startOfMonth(now);
  }
  const data:Todo[] =  await prisma.todo.findMany({
    where: filterData?{
      created_at: {gte: filterData}
    }:undefined,
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
  
  return (
    <div className="h-screen w-full  my-20 bg-linear-to-b p-12 from-gray-100 to-stone-500 flex flex-col items-center gap-4">
     <FilterDate filter={filter} />
      {dataSort.map((todo)=>(
        <TodoCard key={todo.id} todo={todo} toggelTodo={toggelTodo} />
      ))}
    </div>
  );
}
