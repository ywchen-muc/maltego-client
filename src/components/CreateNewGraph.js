import React from 'react';

class CreateNewGraph extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            data: {
                "nodes":[],
                "edges":[]
            }
        }
    }
    
    onNameChange = (event) => {
        this.setState({name: event.target.value})
    }

    onSubmitCreate = () => {
        if (this.state.name === '') {
            alert("Field cannot be empty!");
        } else {
            fetch('http://localhost:3001/', {
                method: 'post',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    name: this.state.name,
                    data: this.state.data
                })
            })
                .then(response => response.json())
                .then(console.log)
        }
    }

    render() {
        return (
            <div className="pa4-l">
                <form style={{backgroundColor: '#2f384a'}} className="mw7 center pa4 br2-ns ba b--black-10">
                    <fieldset className="cf bn ma0 pa0">
                        <legend className="pa0 f5 f4-ns mb3 white b">Enter a name to create new graph</legend>
                        <div className="cf">
                            <input
                                className= "f6 f5-l input-reset bn fl black-80 bg-white pa3 lh-solid w-100 w-75-m w-80-l br2-ns br--left-ns"
                                type='text'
                                placeholder='Enter the graph name'
                                onChange={this.onNameChange}
                            />
                            <button 
                                style={{backgroundColor: '#f2b907'}}
                                className="f6 f5-l button-reset fl pv3 tc bn bg-animate hover-bg-black b--moon-gray pointer w-100 w-25-m w-20-l br2-ns br--right-ns"
                                onClick={this.onSubmitCreate} >
                                Create Graph
                            </button>
                        </div>
                    </fieldset>
                </form>
            </div>
        );
    }

}

export default CreateNewGraph;