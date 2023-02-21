import Color from 'color';
import stc from 'string-to-color';

type TIcon = {
  text: string;
  pxSize: number;
};

const stringToColor = (text: string) => {
  const hslColor = Color(stc(text)).hsl().string();
  return hslColor;
};

function createMushroom(text: string) {
  const t = 'transparent';
  const b = '#181818';
  const c = stringToColor(text.toLowerCase());
  const s = stringToColor('spot' + text.toLowerCase());

  const mushroom = [
    [t, t, t, t, t, b, b, b, b, b, b, t, t, t, t, t],
    [t, t, t, b, b, c, c, c, c, s, s, b, b, t, t, t],
    [t, t, b, s, s, c, c, c, c, s, s, s, s, b, t, t],
    [t, b, s, s, c, c, c, c, c, c, s, s, s, s, b, t],
    [t, b, s, c, c, s, s, s, s, c, c, s, s, s, b, t],
    [b, c, c, c, s, s, s, s, s, s, c, c, c, c, c, b],
    [b, c, c, c, s, s, s, s, s, s, c, c, s, s, c, b],
    [b, s, c, c, s, s, s, s, s, s, c, s, s, s, s, b],
    [b, s, s, c, c, s, s, s, s, c, c, s, s, s, s, b],
    [b, s, s, c, c, c, c, c, c, c, c, c, s, s, c, b],
    [b, s, c, c, b, b, b, b, b, b, b, b, c, c, c, b],
    [t, b, b, b, s, s, b, s, s, b, s, s, b, b, b, t],
    [t, t, b, s, s, s, b, s, s, b, s, s, s, b, t, t],
    [t, t, b, s, s, s, s, s, s, s, s, s, s, b, t, t],
    [t, t, t, b, s, s, s, s, s, s, s, s, b, t, t, t],
    [t, t, t, t, b, b, b, b, b, b, b, b, t, t, t, t],
  ];

  return mushroom;
}

export function renderIcon(opts: TIcon, canvas: HTMLCanvasElement) {
  let canvasRow = 1;
  const px = opts.pxSize;
  const ctx = canvas.getContext('2d');
  ctx!.canvas.width = opts.pxSize * 20
  const data = createMushroom(opts.text);

  data.map((row: string[]) => {
    row.map((el: string | CanvasGradient | CanvasPattern, i: number) => {
      ctx!.fillStyle = el;
      ctx!.fillRect(i * px, canvasRow * px, px, px);
    });
    canvasRow++;
  });

  return canvas;
}

export function createIcon(opts: TIcon) {
  console.log(opts)
  const createCanvasElement = document.createElement('canvas');

  renderIcon(opts, createCanvasElement);

  return createCanvasElement;
}
