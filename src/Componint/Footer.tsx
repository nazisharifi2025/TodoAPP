export default function Footer(){
    return(
        <div className="p-4 h-20 bg-blue-200 text-white fixed bottom-0 w-full right-0 justify-between  items-center">
            <h1 className="text-2xl font-semibold  text-center">{new Date().getFullYear()}  &copy; All rights reserved</h1>
        </div>
    )
}