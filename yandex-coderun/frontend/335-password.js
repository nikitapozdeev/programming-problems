module.exports = function(password) {
  if (!password) {
    return false;
  }

  let ptr = password.length;
  while (ptr > 0) {
    if (password.substring(ptr - 4, ptr) === '1111') {
      ptr -= 4;
    } else if (password.substring(ptr - 3, ptr) === '711') {
      ptr -= 3;
    } else if (password[ptr - 1] === '7') {
      ptr--;
    } else {
      break;
    }
  }

  return ptr === 0;
}