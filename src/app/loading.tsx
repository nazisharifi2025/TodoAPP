export default function loading(){
    return(
        <div className="h-screen w-full flex justify-center items-center">
            <div className="h-10 w-10 border-4 rounded-full border-gray-300 relative ">
                <div className="h-10 w-10 border-4 rounded-full border-t-0 border-gray-500 absolute -top-1 -right-1 animate-spin"></div>
            </div>
        </div>
    )
}