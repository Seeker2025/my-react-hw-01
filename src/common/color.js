export function getColor() {
  let color;

  do {
    color = Math.floor(Math.random() * 0xFFFFFF);
  } while (isTooLight(color));

  return color.toString(16).padStart(6, "0");
}

function isTooLight(hex) {
  const r = hex >> 16 & 255;
  const g = hex >> 8 & 255;
  const b = hex & 255;

  const brightness = 0.299*r + 0.587*g + 0.114*b;

  return brightness > 200; // отсекаем только самые светлые
}