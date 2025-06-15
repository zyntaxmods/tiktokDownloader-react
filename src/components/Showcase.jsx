import React, { useEffect, useState } from 'react'

const Showcase = ({result}) => {
    if(!result || !result.data.ai_dynamic_cover || !result.data.hdplay || !result.data.author.unique_id){
        console.error("Something went wrong");
        return null;
    }
        const tiktokRaw = result.data;
        const [downloaded, isDownloaded] = useState(false);
        const download = async() =>{
            if(!tiktokRaw){
                console.error("Something went wrong")
                return null;
            }
            else{
            try{
            const response = await fetch(tiktokRaw.hdplay);
            const result = await response.blob();
            const link = document.createElement("a");
            link.href = URL.createObjectURL(result);
            link.download = "tiktokdownloadzyrill.mp4";
            link.click();
            isDownloaded(true);
            }
            catch(error){
                console.error("Something went wrong: " + error);
            }
    }
}
  return (
    <div className='flex flex-col justify-center items-center bg-white w-[250px] h-auto m-[auto_auto] rounded-[10px] p-[10px_10px] shadow-[0px_0px_3px_black]'>
        <img src={(tiktokRaw.ai_dynamic_cover) ? tiktokRaw.ai_dynamic_cover : "../assets/image.png"} loading='eager' alt="" className='w-[200px] h-[200px] rounded-[8px] pointer-events-none'/>
        <div>
            <p className='text-gray-600 text-[20px] font-[600] text-center' title={tiktokRaw.author.unique_id}>{tiktokRaw.author.unique_id}</p>
            <div className='flex flex-col gap-[10px]'>
                <button onClick={download}>{(downloaded) ? "Downloaded": "Download Video"}</button>
                <button onClick={() => window.location.reload()}>Convert again?</button>
            </div>
        </div>
    </div>
  )
}

export default Showcase