import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

let App = () => {
  return (
    <div className="app">
      <SushiContainer />
      <Table />
    </div>
  )
}

export default App;