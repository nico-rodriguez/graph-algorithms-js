const { graphWithCycle } = require('./graphs');


/**
* Perform a breadth-first recursive traversal invoking 
* func over each node.
* It prevents cycles.
*
* @param {{node: string, neighbors: string[]}} graph
* @param {string} source
* @param {(node: string) => any} func
*
* @return {any}
*/
const breadthFirstRec = (graph, source, func) => {
  const breadthFirstRecAux = (graph, nodes, func, visited) => {
    if (nodes.length === 0) return;
  
    const neighborNodes = [];
    nodes.forEach(node => {
      if (!visited.has(node)) {
        func(node);
        visited.add(node);
        neighborNodes.push(...graph[node]);
      }
    });
    breadthFirstRecAux(graph, neighborNodes, func, visited);
  };

  breadthFirstRecAux(graph, [source], func, new Set());
}

/**
* Perform a breadth-first iterative traversal invoking 
* func over each node.
* It prevents cycles.
*
* @param {{node: string, neighbors: string[]}} graph
* @param {string} source
* @param {(node: string) => any} func
*
* @return {any}
*/
const breadthFirstIter = (graph, source, func) => {
  const visited = new Set();
  const queue = [source];

  while (queue.length > 0) {
    const current = queue.shift();

    if (!visited.has(current)) {
      func(current);
      visited.add(current);
      graph[current].forEach(neighbor => queue.push(neighbor));
    }
  }
}


module.exports.breadthFirstRec = breadthFirstRec;
module.exports.breadthFirstIter = breadthFirstIter;


// breadthFirstRec(graphWithCycle, 'a', node => console.log(node));  // a b c d e f
// breadthFirstIter(graphWithCycle, 'a', node => console.log(node)); // a b c d e f