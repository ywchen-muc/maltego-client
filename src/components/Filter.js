import React from 'react';

const Filter = ({ searchfield, searchChange, onButtonSubmit }) => {
    return (
        <div>
            <input 
            className= 'pa3 ba b--greeb bg-mid-gray shadow-3'
            type='search' 
            placeholder='Search graphs by label'
            onChange={searchChange}
            />
            <button 
            className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple' 
            onClick={onButtonSubmit}>
            Filter</button>
        </div>
    )
}

export default Filter;