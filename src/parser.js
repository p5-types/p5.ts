/// @ts-check

function countParentheses(s, start, end) {
  let pos = start;
  while (pos < end) {
    if (s.charAt(pos) !== '(' || s.charAt(end - 1 - pos) !== ')') {
      break;
    }
    pos++;
  }
  return pos;
}

function eatSplitGroup(s, start, end) {
  if (s.charAt(start) === '(') {
    let pos = start + 1;
    let parens = 1;
    while (pos < end) {
      if (s.charAt(pos) === '(') {
        parens++;
      } else if (s.charAt(pos) === ')') {
        parens--;
      }
      pos++;
      if (parens === 0) {
        if (pos === end || s.charAt(pos) === '|') {
          const nextOffset = pos === end ? 0 : 1;
          return {
            parenGroup: true,
            end: pos,
            next: pos + nextOffset
          };
        }

        throw new Error(
          `Trailing characters after parenthesis group in "${s.substring(
            start,
            end
          )}`
        );
      }
      if (pos === end) {
        throw new Error(
          `Mismatched parentheses (Missing ${parens} ')') in "${s.substring(
            start,
            end
          )}"`
        );
      }
    }
  } else {
    let pos = start;
    let parens = 0;
    let hasParens = false;

    while (pos < end) {
      if (s.charAt(pos) === '(') {
        parens++;
        hasParens = true;
      } else if (s.charAt(pos) === ')') {
        parens--;
      }
      pos++;

      if (parens === 0) {
        if (pos === end || s.charAt(pos) === '|') {
          const nextOffset = pos === end ? 0 : 1;
          return {
            parenGroup: false,
            end: pos,
            next: pos + nextOffset
          };
        }
        if (hasParens) {
          throw new Error(
            `Trailing characters at position ${pos -
              start -
              1} in "${s.substring(start, end)}"`
          );
        }
      }

      if (pos === end) {
        throw new Error(
          `Mismatched parentheses (Missing ${parens} ')') in "${s.substring(
            start,
            end
          )}"`
        );
      }
    }
  }
}

function _splitType(s, start, end, result) {
  let pos = start;
  while (pos < end) {
    const group = eatSplitGroup(s, pos, end);
    if (group.parenGroup) {
      // We can remove one and only one level of parenthesis at a time
      _splitType(s, start + 1, group.end - 1, result);
      pos = group.next;
    } else {
      result.push(s.substring(pos, group.end).trim());
      pos = group.next;
    }
  }
}

/**
 *
 * Hand-written parser that splits sum types
 * It splits on | and balances parentheses
 *
 * @param {string} type
 *
 * @returns {string[]}
 */
function splitType(type) {
  const result = [];
  _splitType(type, 0, type.length, result);
  return result;
}

/**
 *
 * @param {string} classname
 * @param {string} paramname
 * @param {string} description
 *
 * @returns {{ values: RegExpExecArray[]; constName: string; }}
 */
function extractConstantsFromDescription(classname, paramname, description) {
  const constantRe = /either\s+(?:[A-Z0-9_]+\s*,?\s*)+((?:or)?\s*(?:[A-Z0-9_]+\s*))/g;
  const execResult = constantRe.exec(description);
  const values = [];
  let match;
  if (execResult) {
    match = execResult[0];
  }
  if (classname === 'endShape' && paramname === 'mode') {
    match = 'CLOSE';
  }
  if (match) {
    const reConst = /[A-Z0-9_]+/g;
    let matchConst;
    while ((matchConst = reConst.exec(match)) !== null) {
      values.push(matchConst);
    }
    const paramWords = paramname
      .split('.')
      .pop()
      .replace(/([A-Z])/g, ' $1')
      .trim()
      .toLowerCase()
      .split(' ');
    const propWords = classname
      .split('.')
      .pop()
      .replace(/([A-Z])/g, ' $1')
      .trim()
      .toLowerCase()
      .split(' ');

    let constName;
    if (paramWords.length > 1 || propWords[0] === 'create') {
      constName = paramWords.join('_');
    } else if (
      propWords[propWords.length - 1] === paramWords[paramWords.length - 1]
    ) {
      constName = propWords.join('_');
    } else {
      constName = propWords[0] + '_' + paramWords[paramWords.length - 1];
    }

    constName = constName.toUpperCase();

    return {
      values: values,
      constName: constName
    };
  }

  return undefined;
}

module.exports = {
  countParentheses: countParentheses,
  extractConstantsFromDescription: extractConstantsFromDescription,
  splitType: splitType
};
