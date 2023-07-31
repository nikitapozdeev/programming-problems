module.exports = function winners(wait, pushResult, STREET_RACERS, N) {
  (async () => {
    const answer = [];
    const promisifiedWait = async (racer, checkpoint) => {
      return new Promise((resolve, reject) => {
        wait(racer, checkpoint, (error) => {
          if (!error) {
            resolve();
          }

          reject(error);
        })
      });
    }

    const trackRacer = async (racer, checkpoint) => {
      try {
        await promisifiedWait(racer, checkpoint);
        if (checkpoint === N) {
          answer.push(racer);
          if (answer.length >= 3) {
            pushResult(answer.slice(0, 3));
          }
          return;
        }

        return trackRacer(racer, checkpoint + 1);
      } catch (error) {
        trackRacer(racer, checkpoint);
      }
    }
  
    await Promise.all(STREET_RACERS.map(racer => trackRacer(racer, 1)));
  })();
};