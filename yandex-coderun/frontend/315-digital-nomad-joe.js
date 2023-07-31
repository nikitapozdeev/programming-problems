module.exports = async function(input) {
  const files = await recursiveFind(input);
  files.sort((a, b) => a.localeCompare(b));
  return files;
}

async function promisifySize(input) {
  return new Promise((resolve) => {
    input.size((size) => resolve(size));
  });
}

async function promsifyRead(input, fileIndex) {
  return new Promise((resolve) => {
    input.read(fileIndex, (file) => resolve(file));
  });
}

async function recursiveFind(input) {
  const brokenFiles = [];
  const size = await promisifySize(input);
  for (let i = 0; i < size; i++) {
    const file = await promsifyRead(input, i);
    if (!file) {
      continue;
    }

    if (typeof file === 'string') {
      if (file !== 'file') {
        brokenFiles.push(file);
      }
    } else if (typeof file === 'object' && Object.keys(file).length) {
      brokenFiles.push(...await recursiveFind(file));
    }
  }
  return brokenFiles;
}