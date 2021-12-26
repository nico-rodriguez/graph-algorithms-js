const { edges2graph } = require('./edges');


module.exports.graphWithCycle = {
  a: ['b', 'c'],
  b: ['a', 'd'],
  c: ['e'],
  d: ['f'],
  e: [],
  f: []  
}

module.exports.disconnectedGraph = {
  '3': [],
  '4': ['6'],
  '6': ['4', '5', '7', '8'],
  '8': ['6'],
  '7': ['6'],
  '5': ['6'],
  '1': ['2'],
  '2': ['1']
}

module.exports.cycleGraph = edges2graph([
  ['w', 'x'],
  ['x', 'y'],
  ['z', 'y'],
  ['z', 'v'],
  ['w', 'v']
]);