import React from 'react';

const Filter = ({ searchfield, searchChange, onButtonSubmit }) => {
    return (
        <div className='tc'>
            <input 
            className= 'input-reset ba b--black-20 pa3 w-20'
            type='search' 
            placeholder='Search graphs by label'
            onChange={searchChange}
            />
            <button 
            className='f6 link dim br2 ba bw1 ph3 pv2 mb2 dib mid-gray' 
            onClick={onButtonSubmit}>
            Filter</button>
        </div>
    )
}

export default Filter;