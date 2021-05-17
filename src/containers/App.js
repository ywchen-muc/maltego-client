import React, { Component, useState, useEffect } from 'react';
import './App.css';
import CardList from '../components/CardList';
import Filter from '../components/Filter';

const initialState = {
  input:'',
  graphs: []
}

class App extends Component {
  constructor(){
    super();
    this.state = initialState;
  }

  componentDidMount() {
    fetch('http://localhost:3001')
      .then(response => response.json())
      .then(this.loadGraphs)
  }

  loadGraphs = (data) => {
    this.setState({graphs: data});
    // console.log(this.state);
  }

  // loadGraph = () => {
  //   fetch('http://localhost:3001/', {
  //     method: 'get',
  //     headers: {'Content-Type': 'application/json'}
  //   })
  //   .then(response => response.json())
  //   .then(console.log)
  //   .catch(err => console.log(err))
  // }

  // onSearchChange = (event) => {
  //   setSearchfield(event.target.value)}
  
  // filteredGraphs = this.state.graphs.filter(graph => {
  //   return graph.name.toLowerCase().includes(searchfield.toLowerCase());
  //   })

  render() {
    const { input, graphs } = this.state;
    return(
    <div className='tc'>
      <h1>Maltego</h1>
      <h2>Coding Challenge</h2>
      <Filter />
      <CardList graphList={this.state.graphs} />
    </div>
    );
  }
}

  // const onSearchChange = (event) => {
  //   setSearchfield(event.target.value)}
  
  // const filteredGraphs = graphs.filter(graph => {
  //   return graph.name.toLowerCase().includes(searchfield.toLowerCase());
  //   })

  // return (
  //   <div className='tc'>
  //     <h1>Maltego</h1>
  //     <h2>Coding Challenge</h2>
  //     <Filter searchChange={onSearchChange} />
  //     <CardList graphs={filteredGraphs} />
  //   </div>
  // );



export default App;
