function splitLines(text: string) {
  const lines = [];

  let m: (string | any[])[];
  const reSplit = /(( *\* ?)?.*)(?:\r\n|\r|\n)/g;
  while ((m = reSplit.exec(text)) != null) {
    if (m.index === reSplit.lastIndex) {
      reSplit.lastIndex++;
    }

    lines.push({
      index: m.index,
      text: m[1],
      prefixLength: m[2] ? m[2].length : 0
    });
  }

  return lines;
}

const prologue = `import "p5/global";

`;

export function processFile(text: string) {
  this.lines = splitLines(text);

  let m: (string | any[])[];
  const comments = [];

  const reComment = /\/\*\*(?:.|\r|\n)*?\*\//g;
  while ((m = reComment.exec(text)) != null) {
    let value = m[0];
    comments.push({
      value: value,
      range: [m.index, m.index + value.length]
    });
  }

  const samples:{ comment: { value: string; range: number[]; }; index: number; code: string; }[] = (this.samples = []);

  for (let i = 0; i < comments.length; i++) {
    const comment = comments[i];
    const commentText = comment.value;

    const re = /(<code[^>]*>\s*(?:\r\n|\r|\n))((?:.|\r|\n)*?)<\/code>/gm;
    while ((m = re.exec(commentText)) != null) {
      let code = m[2];
      if (!code) continue;
      code = code.replace(/^ *\* ?/gm, '');

      samples.push({
        comment: comment,
        index: m.index + m[1].length,
        code
      });
    }
  }

  return samples.map(s => `${prologue}${s.code}`);
}
