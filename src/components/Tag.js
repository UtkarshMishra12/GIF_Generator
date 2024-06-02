import React, {useState } from "react";
import Spinner from "./Spinner";
import useGif from "../hooks/useGif";


function Tag(){
    const[tag, setTag] = useState('');

    function clickHandler(){
        FetchData('car');
    }
    
    function changeHandler(event){
        setTag(event.target.value);
    }

    const{gif, loadSpinner, FetchData} = useGif(tag);

    return(
        <div className='lg:w-1/2 w-full bg-blue-500 rounded-xl border border-black
        flex flex-col items-center gap-y-5 mt-[15px]'>
            <h1 className='mt-[15px] text-xl md:text-2xl underline uppercase font-bold'>Radndom {tag} Gif</h1>
            {
                loadSpinner ? (<Spinner
                />) 
                : (
                    <img src={gif} alt="Gif" width="450" />
                )
            }
            <input className='w-10/12 text-lg py-2 rounded-lg mb-[3px] text-center'
              onChange={changeHandler} 
              value={tag}
              placeholder="Type Anything!"
            />
            <button onClick={clickHandler} className="w-10/12 bg-yellow-500 text-lg py-2 rounded-lg mb-[20px] uppercase  font-medium tracking-wide">Generate</button>
        </div>
    )
}

export default Tag;