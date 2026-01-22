"use client"
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation'

function FilterData({filter}:{filter:string}) {
    const router = useRouter();
    const searchParams = useSearchParams();
    function handelchenge(value:string){
        const newParams = new URLSearchParams(searchParams.toString());
        if(value === "all"){
            newParams.delete('filter');
        }
        else{
            newParams.set('filter' , value);
        }
        router.push(`/?${newParams.toString()}`);
    }
  return (
    <select className=' border-2 fixed py-2 px-10 bg-white outline-0 font-bold  rounded-md  right-12 top-26' value={filter} onChange={(e)=> handelchenge(e.target.value)}>
        <option value="all">ALL</option>
        <option value="today">Today</option>
        <option value="week">This Week</option>
        <option value="month">This Month</option>
    </select>
  )
}

export default FilterData