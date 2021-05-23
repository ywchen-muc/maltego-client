import React from 'react';
import Graphin, { Behaviors } from '@antv/graphin';
import { Link } from "react-router-dom";



const Card = ({ id, name, data, onRemove }) => {

    const { ZoomCanvas } = Behaviors;
    return (
        <div style={{backgroundColor: '#2f384a'}} className="w-30 dib br3 pa3 ma2 bw2 shadow-5">
            <div>
                <h2 className="white b">{name}</h2>
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
                >
                <Link
                to={{
                    pathname: "/graph",
                    state: data
                }}>
                View graph
                </Link>
            </button>
        </div>
    );
}

export default Card;
