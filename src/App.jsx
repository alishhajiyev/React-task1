import React, {Component} from 'react'
import './App.css'
import UserCV from  './components/UserCV/UserCV'

class App extends Component {
  state={
    name: ""
  }
  render(){
    return (
      <div className="App">
        <div className='color'></div>
        <UserCV/>
      </div>
    )
  }
  
}

export default App
