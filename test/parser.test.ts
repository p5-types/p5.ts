import { splitType } from '../src/parser';

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

describe('split types', () => {
  test("split types", () => {
    for (const testCase of splitTypesMap) {
      expect(splitType(testCase.from)).toStrictEqual(testCase.to);
    }
  })
});
