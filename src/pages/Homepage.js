import React, {Component} from 'react';
import CardList from '../components/CardList';
import Filter from '../components/Filter';
import CreateNewGraph from '../components/CreateNewGraph';
import Nav from '../components/Nav';

const initialState = {
    searchfield:'',
    graphs: [],
  }
  
class Homepage extends Component {
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
  
    onFilteredGraph = () => {
      const { searchfield } = this.state;
      if (searchfield.length === 0) {
        return this.getData();
      } else {
        fetch(`http://localhost:3001/node/${searchfield}`, {
            method: 'get',
            headers: {'Content-Type': 'application/json'}
          })
          .then(response => response.json())
          .then(response => this.setState({graphs: response}))
          .catch(err => console.log(err))
     }
    }
  
    onDeleteButtonClick = (graphId) => {
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

    onGraphPageButtonClick = (graphId) => {
        fetch(`http://localhost:3001/${graphId}`, {
            method: 'GET',
            headers: {'Content-Type': 'application/json'}
        })
            .then(response => response.json())
            .then(response => this.getData())
            .catch(err => console.log(err))
    }
  
    render() {
        return(
        <div className='tc'>
          <Nav/>
          <Filter 
            searchChange={this.onSearchChange} 
            onButtonSubmit={this.onButtonSubmit} />
          <CreateNewGraph 
            createChangeHandler={this.createChangeHandler}
            onSubmitCreate={this.onSubmitCreate} />
          <CardList 
            graphList={this.state.graphs}
            // onClick={this.onGraphPageButtonClick}
            onRemove={this.onDeleteButtonClick} />
        </div>
        );
      }
    }

export default Homepage;
