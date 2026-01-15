export default function Footer(){
    return(
        <div className="p-4 h-20 bg-blue-200 text-white flex justify-between items-center">
            <h1 className="text-3xl font-semibold ">{new Date().toLocaleString()}  &copy; All rights reserved</h1>
        </div>
    )
}