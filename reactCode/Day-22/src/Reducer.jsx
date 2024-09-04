import {useReducer} from 'react'

const Reducer = () => {

    function countReducer(state,action){
        switch (action.type) {
            case "increment":
                return{count : state.count + 1};
            case "decrement":
                return{count : state.count - 1};
            case "reset" :
                return{counter : 0}   
            case "loading":
                return{loading : !state.loading}         
            default:
                return nem Error("Unknown Type");
                
        }
    }
    const initialState={count:0}
    const [state, dispath] = useReducer(countReducer,initialState)
    return (
        <div className='p-24'>
            <p className='text-2x1 text-white'>
                {state.count}
            </p>
            <button></button>
        </div>
    )
}

export default Reducer
