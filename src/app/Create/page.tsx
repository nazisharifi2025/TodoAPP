import { prisma } from "@/lib/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export default async function(){
    async function CreateData(formData : FormData){
        "use server"
       const myTask = formData.get('task') as string;
       await prisma.todo.create({
        data:{
            task: myTask,
            completed: false,
            created_at : new Date(),
        }
    });
    revalidatePath('/');
       redirect('/');
    }
    return(
        <div className="h-screen w-full flex justify-center items-center p-5">
            <div className="w-8/12 border h-fit p-4 flex items-center flex-col gap-6">
                <h1 className="text-4xl font-bold bg-linear-210 from-pink-300 to-black bg-clip-text text-transparent">Adding Data</h1>
                <form action={CreateData} className="flex w-full flex-col gap-4 justify-center items-center">
                    <input name="task" type="text" className="border w-full border-gray-500 outline-0 py-2 px-5" />
                    <button type="submit" className="text-white bg-black font-serif text-xl py-2 px-5">Save</button>
                </form>
            </div>
            
        </div>
    )
}