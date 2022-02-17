import React, { Component } from 'react'
import img from './assets/statespic.jpeg'

 class App extends Component {
   state = {
     fullName: 'Emilia Odoh',
     bio: 'emilia is a fine girl',
     imgSrc: img,
     profession: 'software developer',
     show: true
   }
handleClick= () =>{this.setState({show:!this.state.show})}
  render() {
    return (
      <div>
        {this.state.show?(<div>
       <h1>fullName = {this.state.fullName}</h1>
        <h1>bio = {this.state.bio}</h1>
        <h1> profession = {this.state.profession}</h1>
        <img src= { this.state.imgSrc} alt = "."/></div>):""}

        <button onClick={this.handleClick}>Click Here!</button>
      </div>
    )
  }
}

export default App

