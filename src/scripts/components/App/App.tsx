import React from 'react';
import '../../../styles/index.scss';
import ForceGraph3D from 'react-force-graph-3d';
import { data } from '../../data.js';
import SpriteText from 'three-spritetext';

export const App = (): React.ReactElement => {
  return (
    <div className="App">
      <ForceGraph3D
        graphData={data}
        linkDirectionalArrowLength={5}
        linkDirectionalArrowRelPos={1}
        linkWidth={0.5}
        onNodeDragEnd={(node) => {
          node.fx = node.x;
          node.fy = node.y;
          node.fz = node.z;
        }}
        backgroundColor="#f6f5f5"
        linkColor={() => '#rgba(7, 13, 89, 1)'}
        nodeColor={() => '#rgba(31, 60, 136, 1)'}
        // nodeThreeObject={(data) => {
        //   const sprite = new SpriteText('test');
        //   sprite.color = 'red';
        //   return sprite;
        // }}
        // nodeThreeObject={new SpriteText('text', 8, 'blue')}
        // nodeThreeObject={(node) => {
        //   let i = 0;
        //   let sprite: SpriteText = new SpriteText();
        //   while (i < data.nodes.length) {
        //     sprite = new SpriteText(data.nodes[i].name);
        //     sprite.color = 'red';
        //     i++;
        //   }
        //   return sprite;
        // }}
        nodeThreeObject={(node) => {
          const sprite = new SpriteText(`${node.id}`);
          sprite.color = '#1f3c88';
          sprite.textHeight = 8;
          return sprite;
        }}
      />
    </div>
  );
};
