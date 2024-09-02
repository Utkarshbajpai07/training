//  import Name from "./name";

// import Conditional_Rendering from "./Conditional_Rendering"

// import Multiple_Props from "./Multiple_Props";

// function App() {
//    let fname="utkarsh"
//   const ProfileCard ={
//     name:"utkarsh",
//     age:19,
//     location:"lakhimpur",

//   };
//   return (
//     <>
//     <div>
//       <Name text={fname}/>
//     </div> 
//     <Multiple_Props object={ProfileCard}/>

    
//     </>
//   )
// }



// function App() {
//   let status =10;
//   return (
//     <div>
//       <Conditional_Rendering option={status}/>
//     </div>
//   )
// }

// export default App


// import React from 'react';
// import StatusMessage from './StatusMessage';
// let sta ="success" 
// const App = () => {
//   return (
//     <div>
//       <StatusMessage sta={sta}/>
//     </div>
//   );
// }

// export default App;

// import React from 'react';
// import State from './State';
// const App = () => {
//   return (
//     <div>
//       <State/>
//     </div>
//   );
// }

// export default App;


import React from 'react';
import LikeCounter from './likeCounter';
// import likeCounter from './LikeCounter';

const App = () => {
  let like=0;

  return (
    <div>
    <LikeCounter  like={like}/>
    </div>
  );
}

export default App;

