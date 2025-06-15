import React, { useEffect, useState } from 'react'

const Search = ({onSearch, loading}) => {
    const[query, Setquery] = useState("");
    useEffect(() => {
        const delay = setTimeout(() => {
            if(query.trim()){
                onSearch(query);
            }
            else{
                return;
            }
        }, 500);
        return() => clearTimeout(delay);
    },[query, onSearch]);
  return (
    <div className='flex flex-col justify-center items-center relative top-[-20px]'>
        <input value={query} onChange={(e) => Setquery(e.target.value)} className='bg-white text-[20px] rounded-[10px] p-[7px_10px] focus:outline-0 focus:drop-shadow-[0px_0px_3px_aqua] transition-[0.5s] focus:transition-[0.5s]' type="text" placeholder='Enter Tiktok URL' required/>
        <p className={(loading) ? "flex": "hidden"} id='loadingMsg'>{(loading) ? "Loading" : "done"}</p>
    </div>
  )
}

export default Search