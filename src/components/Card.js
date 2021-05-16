import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import G6 from '@antv/g6';

export default function () {
    const data = {
        nodes: [
          {
            id: 'node1',
            label: 'Circle1',
            x: 150,
            y: 150,
          },
          {
            id: 'node2',
            label: 'Circle2',
            x: 400,
            y: 150,
          },
        ],
        edges: [
          {
            source: 'node1',
            target: 'node2',
          },
        ],
      };
      
    const ref = React.useRef(null);
    let graph = null;
  
    useEffect(() => {
      if (!graph) {
        // Instantiate the Graph
        graph = new G6.Graph({
          container: ReactDOM.findDOMNode(ref.current),
          width: 300,
          height: 500,
          modes: {
            default: ['drag-canvas'],
          },
          layout: {
            type: 'dagre',
            direction: 'LR',
          },
          defaultNode: {
            type: 'node',
            labelCfg: {
              style: {
                fill: '#000000A6',
                fontSize: 10,
              },
            },
            style: {
              stroke: '#72CC4A',
              width: 150,
            },
          },
          defaultEdge: {
            type: 'polyline',
          },
        });
      }
      graph.data(data);
      graph.render();
    }, []);
  
    return (
        <div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5' ref={ref}>
            <h2>Graph</h2>
        </div>
        );
  }

// const Card = () => {
//     return (
//         <div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
//             <div>

//             </div>
//             <h2>Graph</h2>
//         </div>
//     );
// }

// export default Card;