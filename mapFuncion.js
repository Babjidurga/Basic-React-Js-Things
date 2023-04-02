import React from 'react'

// Map funcion in ReactJs 
function App(){
  const array = [{id:1,name:"Babji"},{id:2,name:"Karthik"},{id:3,name:"Sai"},{id:4,name:"Ayisha"}]
  return(
    <div>
        <ul >
        
          {
            // We opened in curly braces because to use javascript element as jsx we have to use curly braces
            array.map((value) => 
            // We are passing the key value because for the every item that we are passing should have a unique key prop.
              <li key={value.id}>Hi This is {value.name} from unknown</li>
            )
          }
        </ul>
    </div>
  )
}
export default App