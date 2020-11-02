import React, {useState} from 'react';
import ReactDOM from 'react-dom';
//import App from './App';
import './index.css';
// const lakeList = [
//   {id:"1", name:"Echo", trailhead:"Echo"},
//   {id:"2", name:"Maud", trailhead:"Wrights"},
//   {id:"3", name:"Velma", trailhead:"Bayview"}
// ]

// function Lake(){
//   return(
//     <h1>
//     Visit Lake
//     </h1>

//   )
// }


// function SkiResort(){
//   return(
//     <h1>
//     Visit Ski Resort
//     </h1>
//   )
// }
function App(){
  const [status, setStatus] = useState("Open")
 return(
  //  <React.Fragment>
  //  <Lake/>
  //  <SkiResort/>
  //  </React.Fragment>
  <div>
  <h1>Status:{status}</h1>
  <button onClick ={()=>setStatus("Closed")}>Closed</button>
  <button onClick ={()=>setStatus("Open")}>Open</button>
  <button onClick ={()=>setStatus("Back in 5")}>Break</button>
  </div>
 )
  
}

ReactDOM.render(
  <App/>
  ,
  document.getElementById('root')
);
