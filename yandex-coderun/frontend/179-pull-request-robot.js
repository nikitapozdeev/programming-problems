/**
 * @param {PullRequest[]} pullRequests массив PR, отсортированных по времени создания
 * @returns {string[]} идентификаторы реквестов в порядке мёржа
 */
function mergeAllPRs(pullRequests) {
  const prCount = pullRequests.length;

  const hasConflictedFiles = (filesA, filesB) => {
    let i = 0;
    let j = 0;
    while (i < filesA.length && j < filesB.length) {
      if (filesA[i] < filesB[j]) {
        i++;
      } else if (filesA[i] > filesB[j]) {
        j++;
      } else {
        return true;
      }
    }
    return false;
  }

  const conflicts = {};
  for (let i = 0; i < prCount; i++) {
    for (let j = i + 1; j < prCount; j++) {
      if (hasConflictedFiles(pullRequests[i].files, pullRequests[j].files)) {
        if (!conflicts[j]) {
          conflicts[j] = [];
        }
        conflicts[j].push(i);
      }
    }
  }

  if (Object.keys(conflicts).length === 0) {
    return pullRequests.map(pr => pr.id);
  }
  
  let maxSum = 0;
  let maxRoute = [];

  const dfs = (i, sum, route) => {
    if (i === prCount) {
      if (sum > maxSum) {
        maxRoute = Object.keys(route);
        maxSum = sum;
      }
      return;
    }

    if (!(conflicts[i] && conflicts[i].some(pr => route[pr]))) {
      dfs(i + 1, sum + pullRequests[i].files.length, {...route, [i]: true });
    } else {
      dfs(i + 1, sum, {...route});

      let newRoute = {...route};
      let newSum = sum;
      for (const j of (conflicts[i] || [])) {
        if (j in newRoute) {
          delete newRoute[j];
          newSum -= pullRequests[j].files.length;
        }
      }
      newRoute[i] = true;
      dfs(i + 1, newSum + pullRequests[i].files.length, newRoute);
    }
  }

  dfs(0, 0, {});

  return maxRoute.map(prIndex => pullRequests[Number(prIndex)].id);
}