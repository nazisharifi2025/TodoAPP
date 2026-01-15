import { prisma } from "@/lib/db";
import Image from "next/image";
type Todo ={
  id:number;
  task:string;
  completed: boolean;
}
export default async function Home() {
  // const  Data = await prisma.todo.findFirst()
  // const  Data = await prisma.todo.findFirstOrThrow();
  const data:Todo[] =  await prisma.todo.findMany(
    // where: {id:{gte:4}}
    // where:{task:'learning Prisma'}
    {
      // where: {id: {not:4}}
      // where: {id: {gte: 2}}
      // where : {id:{lte:3}}
      // where: {id:{gt:3},task:{contains:'r'.toLocaleLowerCase()}}
      where:{
        OR:[
          {task: {contains: 't'.toLocaleLowerCase()}},
          {id: {gt:5}}
        ]
      }
    }

  );
  return (
    <div className="h-screen w-full my-20 bg-linear-to-b p-12 from-gray-100 to-stone-500 flex flex-col items-center gap-4">
      {data.map((todo)=>(
        <div key={todo.id} className="bg-white border-8 border-black p-5 w-7/12">
          {todo.task}
        </div>
      ))}
    </div>
  );
}
