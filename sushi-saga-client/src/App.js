import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3001/sushis"

class App extends Component {


  constructor(){
    super()
    this.state={
      sushis: [],
      startingIndex: 0
     // eatenSushis: []
    }

  }

  componentDidMount(){
    fetch(API)
    .then(res => res.json())
    .then(data => {
      const sushiData = data.map(sushi => { /*   return {...sushi, eaten: false } */
                  sushi.eaten = false
                  return sushi })

      this.setState({sushis: sushiData})
    
    })

  }

  fourMoreSushis(){
    return this.state.sushis.slice(this.state.startingIndex, this.state.startingIndex + 4)
  }

  handleMoreButton = (e)=>{
    
    this.setState({startingIndex: this.state.startingIndex + 4})

  }

  handleEatSushi= (e)=>{

    const id = parseInt(e.target.id)

    let updateSushi = this.state.sushis.map(sushi => {  
        
      if(id=== sushi.id)
        {
          sushi.eaten = true
          return sushi
        }
      else
        return sushi 
      // (id === sushi.id) ? {...sushi, eaten: true} : sushi
     })

     this.setState({sushis: updateSushi})

    //get id from div 
    //compare to sushi id from sushis in state
      //change eaten value
    //setState to "new" array of sushis 

  }

  eatenSushis(){

    return this.state.sushis.filter(sushi => sushi.eaten)
      //return an array of eaten sushis
  }

  render() {
    return (
      <div className="app">
        <SushiContainer handleEatSushi={this.handleEatSushi} handleMoreButton={this.handleMoreButton} sushis={ this.fourMoreSushis()}/>
        <Table eatenSushisArray={this.eatenSushis()}/>
      </div>
    );
  }
}

export default App;