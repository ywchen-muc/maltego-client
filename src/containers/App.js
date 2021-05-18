import React, { Component } from 'react';
import './App.css';
import CardList from '../components/CardList';
import Filter from '../components/Filter';

const initialState = {
  searchfield:'',
  graphs: [],
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

  onSearchChange = (event) => {
    this.setState({searchfield: event.target.value})
  }
  
  onButtonSubmit = () => {
    this.onFilteredGraph();
  }

  onFilteredGraph = () => {
    const { graphs, searchfield } = this.state;
    //TO DO: Fix after filtering could not back to origin graphList.
    if (searchfield.length === 0) {
      return this.setState({graphs: graphs});
    } else {
    let matchedGraph = [];
    graphs.forEach((eachGraph) => {
      let eachNode= eachGraph.data.nodes;
      eachNode.filter( node => {
        if(node.label  === searchfield){
          matchedGraph.push(eachGraph);
        }
        return this.setState({graphs: matchedGraph});
      });
    });
   }
  }

  render() {
    return(
    <div className='tc'>
      <h1>Maltego</h1>
      <h2>Coding Challenge</h2>
      <Filter 
        searchChange={this.onSearchChange} 
        onButtonSubmit={this.onButtonSubmit} />
      <CardList graphList={this.state.graphs} />
    </div>
    );
  }
}




export default App;
