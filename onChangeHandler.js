
// This is a simple syntax for the example of onChangeHandler 
// if you enter something in the input field the same can be used using {user} by useState hooks.
// In simple js file it will not give any output but in React js file it will give the output

import React,{useState} from 'react'
import './App.css'

const App = () => {
  const [name,setName] = useState("");
  const handler = e => {
    setName(e.target.value)
  }
  return (
    <div className='main-container'>

      <input type = "text" name="name" placeholder='TEXT YOU WANT' className = "input-el" onChange={handler}/>
      <div className='second-container'>
        <p className='description'>The text you are entering in the input field is: </p>
        <h1 className='text'>{name}</h1> 
        </div>
      
    </div>
  )
}

export default App

// The below is the small css code for the above written onChange funcion code

// Remove the comments by selecting all the css code at once and click ctrl + / 
// .main-container{
//   background-image: linear-gradient(to right, rgb(146, 212, 231),rgb(110, 121, 226));
//   min-height: 100vh;
//   width: 100vw;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   flex-wrap: wrap;
//   max-width: 100vw;
// }
// .input-el{
//   margin-top: 20vh;
//   width: 50%;
//   height: 40px;
//   outline: 0;
//   border-radius: 10px;
//   border: 2px rgb(171, 161, 161) solid;
// }
// .description{
//   color: #ffffff;
//   font-family: Verdana, Geneva, Tahoma, sans-serif;
//   font-size: 20px;
//   font-weight: 500;
// }
// .text{
//   color: rgb(25, 50, 43);
//   font-size: 30px;
// }