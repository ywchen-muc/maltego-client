import React from 'react';
import Graphin, { Behaviors } from '@antv/graphin';
import Nav from '../components/Nav';


const Graphpage =  (props) => {
        const { name, data }  = (props.location && props.location.state) || {};
        const { DragCanvas, ZoomCanvas, DragNode, ActivateRelations } = Behaviors;
        return(
            <div className="tc">
                <Nav/>
                <div style={{backgroundColor: '#2f384a'}} className="w-60 dib br3 pa3 ma2 bw2 shadow-5">
                    <div className="white b">
                        <h2>{name}</h2>
                        <p>You could zoom-in/out, drag canvas and nodes and click nodes to see its relationship</p>
                    </div>
                    <Graphin
                        data={data}
                        layout={{ type: 'graphin-force' }}
                        width="800px"
                        height="600px"
                    >
                    <DragCanvas enableOptimize/>
                    <ZoomCanvas enableOptimize />
                    <DragNode />
                    <ActivateRelations trigger="click" />
                    </Graphin>
                </div>
            </div>
                );
    }

export default Graphpage;
