import React from 'react';

const Filter = ({ searchfield, searchChange, onButtonSubmit }) => {
        
    return (
        <div className="pa4-l">
           
            <div style={{backgroundColor: '#f2b907'}} className="mw7 center pa4 br2-ns ba b--black-10">
                <fieldset className="cf bn ma0 pa0">
                    <legend className="pa0 f5 f4-ns mb3 black-80">Enter a node label to filter the match graphs</legend>
                    <div className="cf">
                        <input 
                        className= 'f6 f5-l input-reset bn fl black-80 bg-white pa3 lh-solid w-100 w-75-m w-80-l br2-ns br--left-ns'
                        type='search' 
                        placeholder='Search graphs by label'
                        onChange={searchChange}
                        />
                        <button 
                        className='f6 f5-l button-reset fl pv3 tc bn bg-animate bg-black-70 hover-bg-black white pointer w-100 w-25-m w-20-l br2-ns br--right-ns' 
                        onClick={onButtonSubmit}>
                        Filter</button>
                    </div>
                </fieldset>
            </div>
        </div>
    );
}

export default Filter;