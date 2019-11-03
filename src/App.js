import React, { Component } from 'react'
import caver from 'klaytn/caver'
import BlockNumber from 'components/BlockNumber'

import './App.scss'

window.addEventListener('load', () => {
  if (!window.jet) {
    alert('Please install Jetstream. https://jetstream.world')
  } else {
    console.log('Jetstream is injected.')
  }
})

class App extends Component {
  componentDidMount() {
    
  }
  
  render() {    
    return (
      <div className="App">
        <BlockNumber />
        {this.props.children}
      </div>
    )
  }
}

export default App
