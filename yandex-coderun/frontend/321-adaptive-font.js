/***
 * @param container {Node} ссылка на DOM-node, в которую нужно вписать строку `str`
 * @param str {string} строка, которую необходимо вписать. Максимальная длина равняется 100 символам
 * @param min {number} минимальное значение `font-variation-settings` (целое число)
 * @param max {number} максимальное значение `font-variation-settings` (целое число)
 * @return {number | null} искомое значение `font-variation-settings` (целое число) или null, если текст вписать нельзя
 */
function calcFontVariationSettings (container, str, min, max) {
  if (min > max) {
    return null;
  }

  const containerRect = container.getBoundingClientRect();

  const text = document.createElement('span');
  text.innerHTML = str;
  container.appendChild(text);

  const isOverflows = (wdth) => {
    text.style.setProperty('font-variation-settings', `'wdth' ${wdth}`, 'important')
    const textRect = text.getBoundingClientRect();
    return textRect.width > containerRect.width || textRect.height > containerRect.height
  }

  if (!isOverflows(max)) {
    return max;
  }

  if (isOverflows(min)) {
    return null;
  }
  
  let optimalSize = null;
  while (min <= max) {
    const mid = Math.floor(min + (max - min) / 2);
    if (!isOverflows(mid)) {
      min = mid + 1;
      optimalSize = mid;
    } else {
      max = mid - 1;
    }
  }

  return optimalSize;
}