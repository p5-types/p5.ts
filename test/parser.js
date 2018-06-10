// @ts-check

const test = require('ava').default;

const parser = require('../src/parser');

const splitTypesMap = [
  { from: '', to: [] },
  { from: 'A', to: ['A'] },
  { from: 'A|B', to: ['A', 'B'] },
  { from: '(A|B)', to: ['A', 'B'] },
  { from: '(A|Function(A))', to: ['A', 'Function(A)'] },
  { from: '(A|Function(A|B))', to: ['A', 'Function(A|B)'] },
  { from: 'A|B|Function(A|B)', to: ['A', 'B', 'Function(A|B)'] },
  { from: '((A|B))|Function(A|B)', to: ['A', 'B', 'Function(A|B)'] }
];

test('split types', t => {
  for (let testCase of splitTypesMap) {
    const result = parser.splitType(testCase.from);
    t.deepEqual(result, testCase.to, testCase.from);
  }
});
