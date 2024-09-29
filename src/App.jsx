import React from 'react'
import Navbar from './Components/Navbar'
import myWebTest from './Components/myWebData.js'
const data=myWebTest
console.log(data);
const App = () => {
  return (  
    <div className='Container'> 
      <Navbar/>
    </div>
  )
}

export default App
