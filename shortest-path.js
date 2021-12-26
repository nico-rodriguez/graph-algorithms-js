const { cycleGraph } = require('./graphs');

const { breadthFirstRec, breadthFirstIter} = require('./breadth-first.js');


/**
* Returns a shortest path between two nodes as a list of nodes.
* Returns the empty list if there's no path.
* It prevents cycles.
*
* @param {{node: string, neighbors: string[]}} graph
* @param {string} src
* @param {string} dest
* @param {(graph: {node: string, neighbors: string[]}, source: string, func: (node: string) => any) => any} traversal
*
* @return {[string]}
*/
const shortestPath = (graph, src, dest) => {
  const visited = new Set();
  const queue = [[src, [src]]];

  while (queue.length > 0) {
    const [current, path] = queue.shift();

    if (current === dest) return path;

    if (!visited.has(current)) {
      visited.add(current);
      graph[current].forEach(neighbor => queue.push([neighbor, path.concat(neighbor)]));
    }
  }

  return [];
}


module.exports.shortestPath = shortestPath;


// console.assert(JSON.stringify(shortestPath(cycleGraph, 'w', 'z') === JSON.stringify(['w', 'v', 'z'])));