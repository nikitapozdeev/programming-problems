/**
 * @param n - количество участников
 * @param width - ширина экрана каждого участника в пикселях
 * @param height - высота экрана каждого участника в пикселях
 */
function test(n, width, height) {
  const cols = Math.ceil(Math.sqrt(n));
  const rows = Math.ceil(n / cols);
  const frameWidth = Math.round(width / cols);
  const frameHeight = Math.round(frameWidth * height / width);
  const frames = [];

  for (let row = 0; row < rows; row++) {
    const colsInRow = (row === 0 && n % cols !== 0) ? n % cols : cols;
    for (let col = 0; col < colsInRow; col++) {
      const x = Math.round(((width - (frameWidth * colsInRow)) / 2) + (col * frameWidth));
      const y = Math.round(((height - (frameHeight * rows)) / 2) + (row * frameHeight));
      frames.push({ 
        x, 
        y, 
        width: frameWidth,
        height: frameHeight 
      });
    }
  }
  
  return frames;
}