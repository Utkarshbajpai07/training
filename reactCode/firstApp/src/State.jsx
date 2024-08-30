import React,{useState} from 'react'

const State=()=> {
    // Hook , usestate
    const[count,setcount]=useState(0);
    // let count=0;
    // console.log(count);
    return (

        <div className='text -2x1 font-medium text-white text-center'>
            <p>the value is = {count}</p>
            <button className='p-2 bg-slate-200 rounded text-gray-800 m-4 active:bg-slate-400' onClick={()=>{count -1;
                console.log(count);

            }}> Dev Count(-)</button>
            <button className='p-2 bg-slate-200 rounded text-gray-800 m-4 active:bg-slate-400' onClick={()=>{count +1;
                console.log(count);

            }}> Inc Count(+)</button>
            <p>the value of count is ={count}</p>
        </div>
    )
}

export default State

