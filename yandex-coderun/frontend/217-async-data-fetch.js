const {getHashByData, fetchData} = require('./utils');

module.exports = async function(urls, retryCount) {
  const results = await Promise.allSettled(urls.map(url => fetchWrapper(url, retryCount)))
  return results
    .filter(res => res.status === 'fulfilled')
    .map(res => res.value);
}

async function fetchWrapper(url, retries) {
  try {
    const { data, hashSum } = await fetchData(url);
    const calculatedHash = await new Promise((resolve) => {
      getHashByData(data, (hash) => resolve(hash));
    });
    if (hashSum !== calculatedHash) {
      throw new Error('Wrong hashsum!');
    }
    return data;
  } catch {
    if (retries > 0) {
      return fetchWrapper(url, retries - 1);
    }
    throw new Error('Retry counts exceeded.');
  }
}