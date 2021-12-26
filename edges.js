/**
* Returns a graph from a non-directed edge list.
*
* @param {[[string, string]]} edges
*
* @return {{node: string, neighbors: [string]}}
*/
const edges2graph = (edges) => {
  const addEdge = (graph, node, neighbor) => {
    !(node in graph) && (graph[node] = []);
    graph[node].push(neighbor);
  }

  return edges.reduce((graph, edge) => {
    const [a, b] = edge;
    
    addEdge(graph, a, b);
    addEdge(graph, b, a);
    return graph;
  }, {});
}


module.exports.edges2graph = edges2graph;


// console.assert(JSON.stringify(edges2graph([
//   ['i', 'j'],
//   ['k', 'i'],
//   ['m', 'k'],
//   ['k', 'l'],
//   ['o', 'n']
// ])) === JSON.stringify({i: [ 'j', 'k' ],
//   j: [ 'i' ],
//   k: [ 'i', 'm', 'l' ],
//   m: [ 'k' ],
//   l: [ 'k' ],
//   o: [ 'n' ],
//   n: [ 'o' ]
// }));