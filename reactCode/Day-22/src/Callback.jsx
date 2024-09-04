import React,{useCallback, useState} from 'react'

const Callback = () => {
    const [count, setCount] = useState(0);

    const increment = useCallback(()=>{
        setCount(count + 1);

    })

    return (
        <div className='p-10'>
            <p className='text-gray-100'></p>
            
        </div>
    )
}

export default Callback
