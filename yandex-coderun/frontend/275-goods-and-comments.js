/**
 * @param {Good|Comment} data - ссылка на товар, отзыв или ответ на отзыв,
 * из которой нужно восстановить все возможные данные
 * @return {string}
 */
module.exports = function (data) {
  const comments = [];
  const goods = [];
  collect(data, {}, comments, goods);

  return [
    '## Отзывы',
    serializeComments(comments.filter(({ parent }) => parent.type === 'good')),
    '## Товары', 
    serializeGoods(goods),
  ].join('\n\n');
}

function collect(data, seen, comments, goods) {
  if (seen[data.name || data.text]) {
    return;
  }

  seen[data.name || data.text] = true;

  if (data.type === 'good') {
    goods.push(data);
    for (const related of data.related) {
      collect(related, seen, comments, goods);
    }

    for (const comment of data.comments) {
      collect(comment, seen, comments, goods);
    }
  } else {
    comments.push(data);
    for (const comment of data.comments) {
      collect(comment, seen, comments, goods);
    }
    
    collect(data.parent, seen, comments, goods);
  }
}

function serializeComments(comments, level = 0) {
  if (comments.length === 0) {
    return '';
  }

  return comments
    .sort((a, b) => a.text.localeCompare(b.text))
    .map(comment => {
      let title = `${'  '.repeat(level)}- ${comment.text}`;
      if (comment.parent.type === 'good') {
        title = `${title} - про ${comment.parent.name}`
      }

      const replies = serializeComments(comment.comments, level + 1);
      if (replies) {
        return [title, replies].join('\n');
      }
      return `${title}`;
    }).join('\n');
}

function serializeGoods(goods) {
  if (goods.length === 0) {
    return '';
  }

  return goods
    .sort((a, b) => a.name.localeCompare(b.name))
    .map(good => {
      const title = `- ${good.name}`;
      if (good.related.length > 0) {
        const related = good.related
          .sort((a, b) => a.name.localeCompare(b.name))
          .map(({ name }) => `  * ${name}`)
          .join('\n');
        return [title, related].join('\n');
      }
      return title;
    }).join('\n');
}