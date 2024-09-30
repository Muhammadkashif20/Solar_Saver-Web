  import React from 'react'
  import Navbar from './Components/Navbar'
  import Header from './Components/Header'
  import myWebTest from './Components/myWebData'
  const {Head}=myWebTest
  const App = () => {
    return (  
      <div className='Container'> 
        <Navbar/>
        <Header Head={Head}/>
      </div>
    )
  }

  export default App
