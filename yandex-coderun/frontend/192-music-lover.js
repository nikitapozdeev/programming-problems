/**
 * @param {Band|Genre} data - ссылка на группу или жанр,
 * из которой нужно восстановить все возможные данные
 * @return {string}
 */
module.exports = function (data) {
  const genres = [];
  const bands = [];
  collect(data, {}, bands, genres);
  return [
    '## Жанры',
    serializeGenres(genres.filter(({ parent }) => !parent)),
    '## Группы', 
    serializeBands(bands),
  ].join('\n\n');
}

function collect(data, seen, bands, genres) {
  if (seen[data.name]) {
    return;
  }

  seen[data.name] = true;

  if (data.type === 'band') {
    bands.push(data);
    for (const friend of data.friends) {
      collect(friend, seen, bands, genres);
    }

    for (const genre of data.genres) {
      collect(genre, seen, bands, genres);
    }
  } else {
    genres.push(data);
    for (const band of data.bands) {
      collect(band, seen, bands, genres);
    }
    for (const genre of data.subgenres) {
      collect(genre, seen, bands, genres);
    }
    if (data.parent) {
      collect(data.parent, seen, bands, genres);
    }
  }
}

function serializeGenres(genres, level = 0) {
  if (genres.length === 0) {
    return '';
  }

  return genres
    .sort((a, b) => a.name.localeCompare(b.name))
    .map(genre => {
      let title = `${'  '.repeat(level)}- ${genre.name}`;
      if (genre.bands.length > 0) {
        const bands = genre.bands
          .sort((a, b) => a.name.localeCompare(b.name))
          .map(({ name }) => name)
          .join(', ');
        title = `${title}: ${bands}`;
      }

      const subgenres = serializeGenres(genre.subgenres, level + 1);
      if (subgenres) {
        return [title, subgenres].join('\n');
      }
      return `${title}`;
    }).join('\n');
}

function serializeBands(bands) {
  if (bands.length === 0) {
    return '';
  }

  return bands
    .sort((a, b) => a.name.localeCompare(b.name))
    .map(band => {
      const title = `- ${band.name}`;
      if (band.friends.length > 0) {
        const friends = band.friends
          .sort((a, b) => a.name.localeCompare(b.name))
          .map(({ name }) => name)
          .join(', ');
        return `${title}, друзья: ${friends}`;
      }
      return title;
    }).join('\n');
}