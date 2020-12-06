import React from 'react';
import '../../../styles/index.scss';
import ForceGraph3D from 'react-force-graph-3d';
import { data } from '../../data.js';

export const App = (): React.ReactElement => {
  return (
    <div className="App">
      <ForceGraph3D
        graphData={data}
        linkDirectionalArrowLength={3}
        linkDirectionalArrowRelPos={1}
        linkWidth={0.5}
        nodeAutoColorBy="group"
        // onNodeDragEnd={(node) => {
        //   node.fx = node.x;
        //   node.fy = node.y;
        //   node.fz = node.z;
        // }}
        backgroundColor="#f7f7f7"
        linkColor={() => 'rgba(255,0,255,1)'}
        d3VelocityDecay={0.3}
      />
    </div>
  );
};
