import  { useState } from 'react';

const State = () => {

  const [count, setcount] = useState(0)
  function updateCount(){
    setcount(count+1)
  }
  function upCount(){
    setcount(count-1)
  }
  return (
    <>
      <h1> hello {count} </h1>
      <button onClick={updateCount}> increment</button>
      <button onClick={upCount}>decrement</button>
    </>
  );
}

export default State;
