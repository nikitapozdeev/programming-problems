module.exports = (str) => {
  let listStarted = false;

  const closeList = () => {
    if (listStarted) {
      listStarted = false;
      return '</ul>';
    }

    return '';
  }

  const head = (str) => {
    const match = str.match(/^= (.*)$/);
    if (!match) {
      return str;
    }

    return `${closeList()}<h1>${match[1]}</h1>`
  }

   const paragraph = (str) => {
    if (!str) {
      return `${closeList()}`;
    }
    const match = str.match(/^(?!\* |\= ).*$/g);
    if (!match) {
      return str;
    }

    return `${closeList()}<p>${match[0]}</p>`
  }

  const list = (str) => {
    const match = str.match(/^\* (.*)$/);
    if (!match) {
      return str;
    }

    if (!listStarted) {
      listStarted = true;
      return `<ul><li>${match[1]}</li>`;
    }

    return `<li>${match[1]}</li>`;
  }

  
  const link = (str) => {
    const match = str.match(/(.*)\(\((.*) (.*)\)\)(.*)/);
    if (!match) {
      return str;
    }

    return `${match[1]}<a href="${match[2]}">${match[3]}</a>${match[4]}`;
  }



  const html = str.split('\n').map(row => {
    row = paragraph(row);
    row = head(row);
    row = list(row);
    row = link(row);
    return row;
  }).join('');
  return `${html}${closeList()}`;
};