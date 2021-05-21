import React, { Component } from 'react';
import './App.css';
import CardList from '../components/CardList';
import Filter from '../components/Filter';
import CreateNewGraph from '../components/CreateNewGraph';

const initialState = {
  searchfield:'',
  graphs: [],
}

class App extends Component {
  constructor(){
    super();
    this.state = initialState;
  }

  getData() {
    fetch('http://localhost:3001')
      .then(response => response.json())
      .then(response => this.setState({graphs: response}))
  }

  componentDidMount() {
    this.getData();
  }

  onSearchChange = (event) => {
    this.setState({searchfield: event.target.value})
  }
  
  onButtonSubmit = () => {
    this.onFilteredGraph();
  }

  //TO DO: Fix after filtering could not back to origin graphList.
  //TO DO: Fix error, the app is crashed by filtering graphs with empty data 
  onFilteredGraph = () => {
    const { graphs, searchfield } = this.state;
    if (searchfield.length === 0) {
      return graphs;
    } else {
    let matchedGraph = [];
    graphs.forEach((eachGraph) => {
      let eachNode= eachGraph.data.nodes;
      console.log(eachNode);
      eachNode.filter( node => {
        if(node.label  === searchfield){
          matchedGraph.push(eachGraph);
        }
        return this.setState({graphs: matchedGraph});
      });
    });
   }
  }

  handleClick = (graphId) => {
    fetch(`http://localhost:3001/${graphId}`, {
      method: 'DELETE',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        id: graphId
      })
    })
    .then(response => response.json())
    .then(response => this.getData())
    .catch(err => console.log(err))
  }

  // onGraphClick = (graphId) => {
  //   fetch(`http://localhost:3001/${graphId}`, {
  //     method: 'get'
  //   })
  //   .then(response => response.json())
  //   .then(response => {
  //     window.open(`http://localhost:3000/${graphId}`, "_blank")})
  //   .catch(err => console.log(err))
  // }

  render() {
    return(
    <div className='tc'>
      <h1>Maltego</h1>
      <h2>Coding Challenge</h2>
      <Filter 
        searchChange={this.onSearchChange} 
        onButtonSubmit={this.onButtonSubmit} />
      <CreateNewGraph 
        createChangeHandler={this.createChangeHandler}
        onSubmitCreate={this.onSubmitCreate} />
      <CardList 
        graphList={this.state.graphs}
        // onClick={this.onGraphClick} 
        onRemove={this.handleClick} />
    </div>
    );
  }
}




export default App;
