module.exports = function(content) {
  const lines = content.split('\n');
  let lineNumber = 0;

  const header = [];
  while (lineNumber < lines.length && !lines[lineNumber].match(/describe\('/)) {
    header.push(lines[lineNumber++]);
  }
  header.push(lines[lineNumber++]);

  const beforeTests = [];
  while (lineNumber < lines.length && !lines[lineNumber].match(/(.*it\.skip\('.*'|.*\it\('.*').*function \(\) {/)) {
    beforeTests.push(lines[lineNumber++]);
  }

  const tests = [];
  let currentTest = [lines[lineNumber++]];
  while (lineNumber < lines.length && !lines[lineNumber].match(/^}\);$/m)) {
    if (lines[lineNumber].match(/(.*it\.skip\('.*'|.*\it\('.*').*function \(\) {/)) {
      if (currentTest.length > 0) {
        tests.push(currentTest.join('\n'));
      }
      currentTest = [];
    }
    currentTest.push(lines[lineNumber++]);
  }
  tests.push(currentTest.join('\n'));

  const footer = [];
  while (lineNumber < lines.length) {
    footer.push(lines[lineNumber++]);
  }

  return tests.map(test => {
    return [
      header.join('\n'),
      beforeTests.join('\n'),
      test,
      footer.join('\n')
    ].filter(Boolean).join('\n');
  });
}