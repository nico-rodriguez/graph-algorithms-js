const { disconnectedGraph } = require('./graphs');

const { deepFirstRec, deepFirstIter} = require('./deep-first.js');
const { breadthFirstRec, breadthFirstIter} = require('./breadth-first.js');


/**
* Returns the connected components of a graph.
* It prevents cycles.
*
* @param {{node: string, neighbors: string[]}} graph
* @param {(graph: {node: string, neighbors: string[]}, source: string, func: (node: string) => any) => any} traversal
*
* @return {[{node: string, neighbors: string[]}]} [graph]
*/
const connectedComponents = (graph, traversal = breadthFirstIter) => {
  const nodes = Object.keys(graph);
  const visited = new Set();
  const components = [];

  nodes.forEach(node => {
    if (!visited.has(node)) {
      const component = {};

      traversal(graph, node, node => {
        visited.add(node);
        component[node] = graph[node];
      });

      components.push(component);
    }
  });

  return components;
}

/**
* Returns the largest connected component of a graph.
* It prevents cycles.
*
* @param {{node: string, neighbors: string[]}} graph
* @param {(graph: {node: string, neighbors: string[]}, source: string, func: (node: string) => any) => any} traversal
*
* @return {{node: string, neighbors: string[]}} graph
*/
const largestConnectedComponent = (graph, traversal = breadthFirstIter) => {
  const sortedComponents = connectedComponents(graph, traversal)
    .sort((comp1, comp2) => Object.keys(comp2).length - Object.keys(comp1).length);

  return sortedComponents[0];
}


module.exports.connectedComponents = connectedComponents;
module.exports.largestConnectedComponent = largestConnectedComponent;


// console.log(connectedComponents(disconnectedGraph));
// console.log(largestConnectedComponent(disconnectedGraph));