import React from 'react';

const Filter = ({ searchfield, searchChange, onButtonSubmit }) => {
        
    return (
        <div>           
            <div className="w-100 pa3 mr2">
                <div style={{display: "flex", flexWrap: "wrap"}}>
                    <div className="fl w-80 pa2">
                        <input 
                            style={{height: "56px", margin: "0"}}
                            className= 'fr f5 input-reset br2 ba b--moon-gray w-80 mb2'
                            type='search' 
                            placeholder='Enter a node label to filter the match graphs'
                            onChange={searchChange}
                        />
                    </div>  
                    <div className="fl w-20 pa2">
                        <button 
                            style={{backgroundColor: '#f2b907', border: "3px solid #f2b907", color: "#1d242a", height: "56px", margin: "0" }}
                            className='fl f4 link dim br2 ph4 pv2 mb2 dib' 
                            onClick={onButtonSubmit}>
                            FILTER
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Filter;
