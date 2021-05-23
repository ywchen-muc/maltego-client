import React from 'react';
import Graphin, { Behaviors } from '@antv/graphin';
import Nav from '../components/Nav';

const Graphpage =  (props) => {
        const data  = (props.location && props.location.state) || {};
        // console.log(data);
        const { ZoomCanvas } = Behaviors;

        return(
            <div className="tc">
                <Nav/>
                <div style={{backgroundColor: '#2f384a'}} className="bg-light-green w-30 dib br3 pa3 ma2 bw2 shadow-5">
                    <div className="white b">
                        <h2>This is a force directed graph</h2>
                    </div>
                    <Graphin
                        data={data}
                        layout={{ type: 'concentric' }}
                        width="300px" >
                        <ZoomCanvas disabled />
                    </Graphin>
                </div>
            </div>
                );
    }

export default Graphpage;
