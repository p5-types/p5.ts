/// @ts-check
const fs = require('fs');
const h2p = require('html2plaintext');
const wrap = require('word-wrap');
const semver = require('semver');

function shortenDescription(desc) {
  return wrap(h2p(desc).replace(/[\r\n]+/, ''), {
    width: 50
  });
}

function getVersionString(version) {
  try {
    return `${semver.major(version)}.${semver.minor(version)}`;
  } catch (_) {
    return '0.0';
  }
}

function createEmitter(filename, version) {
  let indentLevel = 0;
  let lastText = '';
  let currentSourceFile;
  const fd = fs.openSync(filename, 'w');

  const versionString = getVersionString(version);

  const emit = function(text) {
    const indentation = [];
    let finalText;

    for (let i = 0; i < indentLevel; i++) {
      indentation.push('  ');
    }

    if (text.trim()) {
      finalText = indentation.join('') + text + '\n';
    } else {
      finalText = '\n';
    }
    fs.writeSync(fd, finalText);

    lastText = text;
  };

  emit.description = function(classitem, overload) {
    const desc = classitem.description;
    if (!desc) {
      return;
    }

    function emitDescription(desc) {
      shortenDescription(desc)
        .split('\n')
        .forEach(function(line) {
          emit(' * ' + line);
        });
    }

    emit.sectionBreak();
    emit('/**');
    emitDescription(desc);
    emit(' *');
    if (overload) {
      let alloverloads = [classitem];
      if (classitem.overloads) {
        alloverloads = alloverloads.concat(classitem.overloads);
      }
      if (overload.params) {
        overload.params.forEach(function(p) {
          let arg = p.name;
          let p2;
          for (let i = 0; !p2 && i < alloverloads.length; i++) {
            if (alloverloads[i].params) {
              p2 = alloverloads[i].params.find(
                p3 => p3.description && p3.name === arg
              );
              if (p2) {
                if (p.optional) {
                  arg = '[' + arg + ']';
                }
                emitDescription('@param ' + arg + ' ' + p2.description);
                break;
              }
            }
          }
        });
      }
      if (overload.chainable) {
        emitDescription('@chainable');
      } else if (overload.return && overload.return.description) {
        emitDescription('@return ' + overload.return.description);
      }
    }
    emit(' */');
  };

  emit.setCurrentSourceFile = function(file) {
    if (file !== currentSourceFile) {
      currentSourceFile = file;
      emit.sectionBreak();
      emit('// ' + file);
      emit.sectionBreak();
    }
  };

  emit.sectionBreak = function() {
    if (lastText !== '' && !/\{$/.test(lastText)) {
      emit('');
    }
  };

  emit.getIndentLevel = function() {
    return indentLevel;
  };

  emit.indent = function() {
    indentLevel++;
  };

  emit.dedent = function() {
    indentLevel--;
  };

  emit.close = function() {
    fs.closeSync(fd);
  };

  emit(`// Type definitions for p5 ${versionString}`);
  emit('// Project: https://github.com/processing/p5.js');
  // Would like to just say it's generated, but it seems like
  // DT want a real name and a github profile.
  emit('// Definitions by: p5-types <https://github.com/p5-types>');
  emit('// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped');

  emit('\n// This file was auto-generated. Please do not edit it.\n');

  return emit;
}

module.exports = createEmitter;
