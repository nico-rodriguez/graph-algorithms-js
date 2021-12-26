const { graphWithCycle } = require('./graphs');


/**
* Perform a depth-first recursive traversal invoking 
* func over each node.
* It prevents cycles.
*
* @param {{node: string, neighbors: string[]}} graph
* @param {string} source
* @param {(node: string) => any} func
*
* @return {any}
*/
const deepFirstRec = (graph, source, func) => {
  const deepFirstRecAux = (graph, source, func, visited) => {
    if (!visited.has(source)) {
      func(source);
      visited.add(source);
      graph[source].forEach(neighbor => deepFirstRecAux(graph, neighbor, func, visited));
    }
  };

  deepFirstRecAux(graph, source, func, new Set());
}

/**
* Perform a depth-first iterative traversal invoking 
* func over each node.
* It prevents cycles.
*
* @param {{node: string, neighbors: string[]}} graph
* @param {string} source
* @param {(node: string) => any} func
*
* @return {any}
*/
const deepFirstIter = (graph, source, func) => {
  const visited = new Set();
  const stack = [source];

  while (stack.length > 0) {
    const current = stack.pop();

    if (!visited.has(current)) {
      func(current);
      visited.add(current);
      graph[current].forEach(neighbor => stack.push(neighbor));
    }
  }
}


module.exports.deepFirstRec = deepFirstRec;
module.exports.deepFirstIter = deepFirstIter;


// deepFirstRec(graphWithCycle, 'a', node => console.log(node)); // a b d f c e
// deepFirstIter(graphWithCycle, 'a', node => console.log(node));  // a c e b d f