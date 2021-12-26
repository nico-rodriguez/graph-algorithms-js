const { graphWithCycle } = require('./graphs');

const { deepFirstRec, deepFirstIter} = require('./deep-first.js');
const { breadthFirstRec, breadthFirstIter} = require('./breadth-first.js');


/**
* Returns true if and only if there's a path from
* src to dest using some traversal mode (defaults to 
* iterative breadth-first).
* It prevents cycles.
*
* @param {{node: string, neighbors: string[]}} graph
* @param {string} src
* @param {string} dest
* @param {(graph: {node: string, neighbors: string[]}, source: string, func: (node: string) => any) => any} traversal
*
* @return {boolean}
*/
const hasPath = (graph, src, dest, traversal = breadthFirstIter) => {
  let found = false;
  const equalsDest = node => node === dest && (found = true);

  traversal(graph, src, equalsDest);
  return found;
}

module.exports.hasPath = hasPath;

// console.assert(hasPath(graphWithCycle, 'a', 'f'));
// console.assert(hasPath(graphWithCycle, 'a', 'f', deepFirstRec));
// console.assert(hasPath(graphWithCycle, 'a', 'g', deepFirstRec), 'g not found!');