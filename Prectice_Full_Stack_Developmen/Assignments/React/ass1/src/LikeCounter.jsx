import { useState } from "react";

const LikeCounter = ({props}) => {
    const [likes, setcount] = useState(1)
    function updatelike(){
        setcount(likes+1)
    }
    // console.log(like)
  return (
    <>
    <div>
        <h1> hello{likes}</h1>
        {/* <h1>{like}</h1> */}
      <button onClick={updatelike}>Like</button>
    </div>
    </>
  );
}

export default LikeCounter;
