import React from 'react';
import ReactDOM from 'react-dom';
//import App from './App';
import './index.css';
const lakeList = [
  "Echo Lake", 
  "Maud Lake", 
  "Cascade Lake"
]
function App(props){
  return( <div>
    <ul>
      {props.lakes.map(lake=>(
        <li>{lake}</li>
      ))}
    </ul>
</div>);

}

ReactDOM.render(
  <App lakes = {lakeList}/>
  ,
  document.getElementById('root')
);
