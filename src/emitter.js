/// @ts-check
const fs = require('fs-extra');
const makeDirSync = fs.ensureDirSync;
const path = require('upath');
const h2p = require('html2plaintext');
const wrap = require('word-wrap');
const prettier = require('prettier');

function shortenDescription(desc) {
  return wrap(h2p(desc).replace(/[\r\n]+/, ''), {
    width: 50
  });
}

class Emitter {
  constructor(filename) {
    this.filename = filename;
    this.indentLevel = 0;
    this.lastText = '';
    this.totalText = '';
    const outDir = path.dirname(filename);
    makeDirSync(outDir);

    this.fd = fs.openSync(filename, 'w');
  }

  emit(text) {
    let finalText;
    const indentation = [];

    for (let i = 0; i < this.indentLevel; i++) {
      indentation.push('  ');
    }

    if (text.trim()) {
      finalText = indentation.join('') + text + '\n';
    } else {
      finalText = '\n';
    }

    this.totalText += finalText;

    this.lastText = text;
  }

  indent() {
    this.indentLevel++;
  }

  dedent() {
    this.indentLevel--;
  }

  close() {
    const prettierConfig = JSON.parse(
      fs.readFileSync(
        path.joinSafe(__dirname, '../DefinitelyTyped/types/.prettierrc'),
        'utf8'
      )
    );
    const formattedText = prettier.format(this.totalText, prettierConfig);
    fs.writeSync(this.fd, formattedText);
    fs.closeSync(this.fd);
  }

  emitDescription(desc) {
    shortenDescription(desc)
      .split('\n')
      .forEach(line => {
        this.emit(' * ' + line);
      });
  }

  itemDescription(classitem, overload) {
    const desc = classitem.description;
    if (!desc) {
      return;
    }

    this.sectionBreak();
    this.emit('/**');
    this.emitDescription(desc);
    this.emit(' *');
    if (overload) {
      let alloverloads = [classitem];
      if (classitem.overloads) {
        alloverloads = alloverloads.concat(classitem.overloads);
      }
      if (overload.params) {
        overload.params.forEach(p => {
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
                this.emitDescription('@param ' + arg + ' ' + p2.description);
                break;
              }
            }
          }
        });
      }
      if (overload.chainable) {
        this.emitDescription('@chainable');
      } else if (overload.return && overload.return.description) {
        this.emitDescription('@return ' + overload.return.description);
      }
    }
    this.emit(' */');
  }

  referencePath(path) {
    this.emit(`/// <reference path="${path}" />`);
  }

  importAugmenter(path) {
    this.emit(`import "${path}";`);
  }

  lineComment(text = '') {
    this.emit(`//${text}`);
  }

  emptyLine() {
    this.emit('');
  }

  sectionBreak() {
    if (this.lastText !== '' && !/\{$/.test(this.lastText)) {
      this.emit('');
    }
  }
}

module.exports = Emitter;
