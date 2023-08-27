import * as fs from 'fs';
const makeDirSync = fs.mkdirSync;
import * as path from 'path';
import h2p from 'html2plaintext';
import wrap from 'word-wrap';
import * as prettier from 'prettier';
import { PathLike } from 'fs';

const shortenDescription = (desc: string) => wrap(h2p(desc).replace(/[\r\n]+/, ''), { width: 50 })

export class Emitter {
  filename: string;
  indentLevel: number;
  lastText: string;
  totalText: string;

  constructor(filename: string) {
    this.filename = filename;
    this.indentLevel = 0;
    this.lastText = '';
    this.totalText = '';
    makeDirSync(path.dirname(filename), { recursive: true })
  }

  emit(text: string) {
    let finalText: string;
    const indentation: string[] = [];

    for (let i = 0; i < this.indentLevel; i++) {
      indentation.push('    ');
    }

    if (text.trim()) {
      finalText = indentation.join('') + text + '\n';
    } else {
      finalText = '\n';
    }

    this.totalText += finalText;

    this.lastText = text;
    return this;
  }

  emitNonEmpty(text: string) {
    if (text.trim().length > 0) {
      this.emit(text);
    }
    return this;
  }

  indent() {
    this.indentLevel++;
    return this;
  }

  dedent() {
    this.indentLevel--;
    return this;
  }

  tryToFormat() {
    try {
      const prettierConfig = JSON.parse(
        fs.readFileSync(
          path.join(__dirname, '../types/.prettierrc'),
          'utf8'
        )
      );
      return prettier.format(this.totalText, prettierConfig);
    } catch (e) {
      console.error(`Failed to format ${this.filename}`);
      console.error(e);
      return this.totalText;
    }
  }

  close() {
    fs.open(this.filename, 'w', (err, fd) => {
      if (err) {
        throw err;
      } else {
        fs.writeFile(fd, this.tryToFormat(), err => {
          if (err) {
            throw err;
          } else {
            fs.close(fd);
          }
        });
      }
    });
  }

  emitDescription(desc: string) {
    shortenDescription(desc)
      .split('\n')
      .forEach(line => this.emit(` * ${line}`));
    return this;
  }

  itemDescription(
    classitem: YUIDocsClassitemMethod,
    overload: YUIDocsClassitemMethodOverload
  ) {
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
        // TODO: fix this error
        //@ts-ignore
        alloverloads = alloverloads.concat(classitem.overloads);
      }
      if (overload.params) {
        overload.params.forEach(p => {
          let arg = p.name;
          let p2: YUIDocsParam;
          for (let i = 0; !p2 && i < alloverloads.length; i++) {
            if (alloverloads[i].params) {
              p2 = alloverloads[i].params.find(
                p3 => p3.description && p3.name === arg
              );
              if (p2) {
                if (p.optional) {
                  arg = `[${arg}]`;
                }
                this.emitDescription(`@param ${arg} ${p2.description}`);
                break;
              }
            }
          }
        });
      }
      if (overload.chainable) {
        this.emitDescription('@chainable');
      }
      if (overload.return) {
        this.emitDescription(`@return ${overload.return.description}`);
      }
    }
    this.emit(' */');
    return this;
  }

  referencePath(path: PathLike) {
    this.emit(`/// <reference path="${path}" />`);
    return this;
  }

  importAugmenter(path: PathLike) {
    this.emit(`import "${path}";`);
    return this;
  }

  lineComment(text: string = '') {
    this.emit(`// ${text}`);
    return this;
  }

  emptyLineComment() {
    this.emit('//');
    return this;
  }

  emptyLine() {
    this.emit('');
    return this;
  }

  sectionBreak() {
    if (this.lastText !== '' && !/\{$/.test(this.lastText)) {
      this.emit('');
    }
    return this;
  }
}
