import EXPRESSIVE_COLOURS from './ExpressiveColours';

const DATA_SIZE = 4;
const MAX_VALUE = 255;
const ALPHA = 3;

type Colour = Uint8ClampedArray;

const convertImage = (image: HTMLImageElement): string => {
  const canvas = document.createElement('canvas');
  canvas.width = image.width;
  canvas.height = image.height;
  canvas.getContext('2d')?.drawImage(image, 0, 0);
  const imageData = canvas
    .getContext('2d')
    ?.getImageData(0, 0, canvas.width, canvas.height);
  if (!imageData) return '';

  const memo = new Map<string, Colour>();

  for (let i = 0; i < imageData.data.length; i += DATA_SIZE) {
    const inputColour = imageData.data.slice(i, i + DATA_SIZE);

    let closestColour = memo.get(inputColour.join(','));

    if (!closestColour) {
      closestColour = getClosestColour(inputColour);
      memo.set(inputColour.join(','), closestColour);
    }
    [
      imageData.data[i],
      imageData.data[i + 1],
      imageData.data[i + 2],
      imageData.data[i + 3], // eslint-disable-line no-magic-numbers
    ] = closestColour;
  }

  canvas.getContext('2d')?.putImageData(imageData, 0, 0);
  return canvas.toDataURL('image/jpg');
};

function getClosestColour(inputColour: Colour): Colour {
  let closestDistance = Infinity;
  let closestColour = new Uint8ClampedArray([0, 0, 0, MAX_VALUE]);

  for (const expressiveColour of EXPRESSIVE_COLOURS) {
    const distance =
      (expressiveColour[0] - inputColour[0]) ** 2 +
      (expressiveColour[1] - inputColour[1]) ** 2 +
      (expressiveColour[2] - inputColour[2]) ** 2;

    if (distance < closestDistance) {
      closestDistance = distance;
      closestColour = expressiveColour;
    }

    if (closestDistance === 0)
      return new Uint8ClampedArray([...closestColour, inputColour[ALPHA]]);
  }

  return new Uint8ClampedArray([...closestColour, inputColour[ALPHA]]);
}
export default convertImage;
