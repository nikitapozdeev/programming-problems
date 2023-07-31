/** @returns Array<string|null> */
module.exports = function(inputString) {
  const matches = inputString.match(/\b([G-HK-U][3-8]{3})([B|T])((?<=B)[C|K|M|B][G|J|P]|(?<=T)[O|R|S][J|8|M|E])([0-9A-Y]{1,24})Z\b/);
  if (!matches) {
    return null;
  }

  return matches.slice(1, 5);
}