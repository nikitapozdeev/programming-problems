function getLastCommonCommitMessage(commits, branches) {
  if (commits.length === 0) {
    throw new Error('No common commit');
  }

  const commitMap = {};
  for (const commit of commits) {
    commitMap[commit.id] = commit;
  }

  const adj = {};
  for (const commit of commits) {
    adj[commit.id] = (commit.parents || []).map(parent => commitMap[parent]);
  }

  const [branchA, branchB] = branches;
  const targetCommits = [];
  for (let i = 0; i < commits.length; i++) {
    if (commits[i].branches) {
      if (commits[i].branches.includes(branchA) || commits[i].branches.includes(branchB)) {
        targetCommits.push(commits[i]);
      }
    }
  }

  const branchHistory = {};
  for (const targetCommit of targetCommits) {
    const seen = {};
    const queue = [targetCommit];

    while (queue.length) {
      const child = queue.pop();
      seen[child.id] = child;
      for (const parent of adj[child.id]) {
        if (!seen[parent.id]) {
          seen[parent.id] = parent;
          queue.push(parent);
        }
      }
    }

    for (const branch of branches) {
      if (targetCommit.branches.includes(branch)) {
        branchHistory[branch] = seen;
      }
    }
  }

  const commonCommits = [];
  for (const id of Object.keys(branchHistory[branchA])) {
    if (branchHistory[branchB][id]) {
      commonCommits.push(branchHistory[branchB][id]);
    }
  }
  
  if (commonCommits.length === 0) {
    throw new Error('No common commit');
  }

  let [latestCommit] = commonCommits;
  for (let i = 1; i < commonCommits.length; i++) {
    if (latestCommit.timestamp < commonCommits[i].timestamp) {
      latestCommit = commonCommits[i];
    } 
  }

  return latestCommit.message || '';
};

module.exports = {getLastCommonCommitMessage};