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
            <div className="">
                <button 
                    style={{backgroundColor: '#f2b907', color: "#1d242a"}}
                    className='f6 link dim br2 ba bw1 ph3 pv2 ma3 dib' 
                    onClick={() => onRemove(id)}>
                    Delete
                </button>
                <button 
                    style={{backgroundColor: '#f2b907'}}
                    className='f6 link dim br2 ba bw1 ph3 pv2 ma3 dib'>
                    <Link
                        style={{ textDecoration: 'none', color: "#1d242a"}}
                        to={{
                            pathname: `/${id}`,
                            state: {
                                id : id,
                                name: name,
                                data: data
                            }
                        }}>
                        View graph
                    </Link>
                </button>
            </div>
        </div>
    );
}

export default Card;
