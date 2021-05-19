import React from 'react';

class CreateNewGraph extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            data: {}
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
            <form>
                <input
                type='text'
                placeholder='Enter the graph name'
                onChange={this.onNameChange}
                />
                <button 
                className='f6 link dim br2 ba bw1 ph3 pv2 mb2 dib mid-gray' 
                onClick={this.onSubmitCreate} >
                Create Graph</button>
            </form>
        );
    }

}


// const CreateNewGraph = ({ createChangeHandler, onSubmitCreate }) => {
//     return (
//         <form>
//             <input
//             type='text'
//             placeholder='Enter the grapg name'
//             onChange={createChangeHandler}
//             />
//             <button 
//             className='f6 link dim br2 ba bw1 ph3 pv2 mb2 dib mid-gray' 
//             onClick={() => onSubmitCreate()}
//             >
//             Create Graph</button>
//         </form>
//     );
// }

export default CreateNewGraph;