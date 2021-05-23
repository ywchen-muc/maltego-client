import React from 'react';
import Graphin, { Behaviors } from '@antv/graphin';
import Nav from '../components/Nav';


const Graphpage =  (props) => {
        const {id, name, data}  = (props.location && props.location.state) || {};
        const { DragCanvas, ZoomCanvas, DragNode, ActivateRelations } = Behaviors;
        return(
            <div className="tc">
                <Nav/>
                <div style={{backgroundColor: '#2f384a'}} className="bg-light-green w-30 dib br3 pa3 ma2 bw2 shadow-5">
                    <div className="white b">
                        <h2>This is a force directed graph</h2>
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
