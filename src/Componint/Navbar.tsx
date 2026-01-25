import Link from "next/link";

export default function Navbar(){
    return(
        <div className="p-4 h-20 bg-blue-900 text-white w-full fixed top-0 right-0 justify-between items-center">
            <div className="flex justify-between items-center px-3">
            <a href="/" className="text-4xl font-semibold ">Todo App</a>
            <button className="text-white bg-blue-600 rounded-md font-bold px-6 py-2">
                <Link href="Create">Create new Task  </Link>
            </button>
            
            </div> 
        </div>
    )
}