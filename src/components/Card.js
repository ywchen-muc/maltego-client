import React from 'react';
// import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
// import ReactDOM from 'react-dom';
import Graphin, { Behaviors } from '@antv/graphin';

const Card = ({ id, name, data, onRemove, onClick }) => {
    const { ZoomCanvas } = Behaviors;
    return (
        <div className="bg-light-green w-30 dib br3 pa3 ma2 bw2 shadow-5">
            <div>
                <h2>{name}</h2>
            </div>
                <Graphin 
                    data={data} 
                    layout={{ type: 'concentric' }} 
                    width="300px" >
                <ZoomCanvas disabled />
                </Graphin>
            <button 
                className='f6 link dim br2 ba bw1 ph3 pv2 mb2 dib mid-gray' 
                onClick={() => onRemove(id)}>
                Delete
            </button>
            <button 
                className='f6 link dim br2 ba bw1 ph3 pv2 mb2 dib mid-gray' 
                // onClick={() => onClick(id)}
                >
                Graph Page
            </button>
        </div>
    );
}

export default Card;
