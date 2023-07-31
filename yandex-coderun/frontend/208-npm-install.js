function getLastCompatibleDependencies(data, packageA, packageB) {
  const aVersions = data[packageA].versions;
  const bVersions = data[packageB].versions;

  const findPackage = ({ packageName, version }) => {
    return (data[packageName]?.versions || []).find(v => v.version === version);
  }

  const collectDependencies = (dependencies, packageName, packageVersion) => {
    if (packageName in dependencies) {
      if (dependencies[packageName] !== packageVersion?.version) {
        dependencies[packageName] = -1;
        return;
      }
    }

    dependencies[packageName] = packageVersion.version;
    if (!packageVersion.dependencies) {
      return;
    }

    for (const dependency of packageVersion.dependencies) {
      const dependencyPackageVersion = findPackage(dependency);
      if (!dependencyPackageVersion) {
        dependencies[dependency.packageName] = -1;
        return;
      }
      
      collectDependencies(dependencies, dependency.packageName, dependencyPackageVersion);
    }
  }

  const hasConflicts = (aDependencies, bDependencies) => {
    if (Object.values(aDependencies).some(version => version === -1)) {
      return true;
    }

    if (Object.values(bDependencies).some(version => version === -1)) {
      return true;
    }

    for (const [packageName, versionNumber] of Object.entries(aDependencies)) {
      if (packageName in bDependencies && bDependencies[packageName] !== versionNumber) {
        return true;
      }
    }

    return false;
  }

  const seen = {};
  let allDependencies = {};
  const queue = [[0, 0]];
  
  while (queue.length > 0) {
    const [aPtr, bPtr] = queue.shift();
    if (seen[`${aPtr}:${bPtr}`] || !aVersions[aPtr] || !bVersions[bPtr]) {
      continue;
    }

    seen[`${aPtr}:${bPtr}`] = true;
    const aDependencies = {};
    const bDependencies = {};
    collectDependencies(aDependencies, packageA, aVersions[aPtr]);
    collectDependencies(bDependencies, packageB, bVersions[bPtr]);

    if (!hasConflicts(aDependencies, bDependencies)) {
      if (Object.keys(allDependencies).length === 0) {
        allDependencies = {...aDependencies, ...bDependencies};
      } else {
        for (const [packageName, packageVersion] of Object.entries(allDependencies)) {
          if (aDependencies[packageName] && packageVersion < aDependencies[packageName] || 
              bDependencies[packageName] && packageVersion < bDependencies[packageName]) {
            allDependencies = {...aDependencies, ...bDependencies};
            break;
          }
        }
      }
    }

    for (const [nextA, nextB] of [[aPtr, bPtr + 1], [aPtr + 1, bPtr]]) {
      if (!(seen[`${nextA}:${nextB}`])) {
        queue.push([nextA, nextB]);
      }
    }
  }

  return {
    [packageA]: allDependencies[packageA],
    [packageB]: allDependencies[packageB],
  }
}

exports.getLastCompatibleDependencies = getLastCompatibleDependencies;