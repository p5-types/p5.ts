/// @ts-check

const exec = require('child_process').exec;

function npmInstall(cwd, npmName) {
  if (!npmName) {
    npmName = 'npm';
  }
  return new Promise((resolve, reject) => {
    exec(
      `${npmName} install`,
      {
        cwd: cwd
      },
      (error, stdout, stderr) => {
        if (error) {
          reject(error);
        } else {
          resolve({ stdout: stdout, stderr: stderr });
        }
      }
    );
  });
}

function npmRun(command, cwd, npxName) {
  if (!npxName) {
    npxName = 'npx';
  }
  return new Promise((resolve, reject) => {
    exec(
      `${npxName} ${command}`,
      {
        cwd: cwd
      },
      (error, stdout, stderr) => {
        if (error) {
          reject(error);
        } else {
          resolve({ stdout: stdout, stderr: stderr });
        }
      }
    );
  });
}

function flatten(arr, result = []) {
  for (let i = 0, length = arr.length; i < length; i++) {
    const value = arr[i];
    if (Array.isArray(value)) {
      flatten(value, result);
    } else {
      result.push(value);
    }
  }
  return result;
}

function padNatString(num, length) {
  const numS = '' + num;
  let padS = '';
  while (padS.length + numS.length < length) {
    padS = '0' + padS;
  }
  return padS + numS;
}

function getCurrentISO8601Date() {
  const now = new Date();
  return `${now.getUTCFullYear()}-${padNatString(
    now.getUTCMonth() + 1,
    2
  )}-${padNatString(now.getUTCDate(), 2)}`;
}

function pluralize(n, singular, plural) {
  if (n === 1) {
    return `1 ${singular}`;
  }
  return `${n} ${plural}`;
}

function conditionalLog(log, ...args) {
  if (log) {
    console.log(...args);
  }
}

module.exports = {
  conditionalLog: conditionalLog,
  flatten: flatten,
  getCurrentISO8601Date: getCurrentISO8601Date,
  npmInstall: npmInstall,
  npmRun: npmRun,
  padNatString: padNatString,
  pluralize: pluralize
};
