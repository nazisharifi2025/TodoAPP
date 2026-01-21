"use client";
import { useRouter, useSearchParams } from 'next/navigation'
import React from 'react'

function FilterDate({filter}:{filter:string}) {
   const router = useRouter();
   const searchParams = useSearchParams();
    function handelChenge(value:string){
        let newParams = new URLSearchParams(searchParams.toString());
         if(value === "all"){
             newParams.delete("filter");
         }
         else{
            newParams.set("filter" , value);
         }
         router.push(`/?${newParams.toString() }`)
    }
  return (
    <select value="filter" onChange={(e)=> handelChenge(e.target.value)} >
        <option value="all">All</option>
        <option value="today">Today</option>
        <option value="week">Week</option>
        <option value="month">Month</option>
    </select>
  )
}

export default FilterDate