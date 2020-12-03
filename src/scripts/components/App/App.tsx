import React from 'react';
import '../../../styles/index.scss';
import ForceGraph3D from 'react-force-graph-3d';

const App = (): React.ReactElement => {
  const data = {
    nodes: [
      {
        id: 'id1',
        name: 'name1',
        val: 1,
      },
      {
        id: 'id2',
        name: 'name2',
        val: 10,
      },
    ],
    links: [
      {
        source: 'id1',
        target: 'id2',
      },
    ],
  };
  return (
    <div className="App">
      <ForceGraph3D graphData={data} />
    </div>
  );
};

export default App;
