'use strict';

/** @typedef {Uint8ClampedArray} Colour */

function onFileUpload(event) {
  const { files } = event.target;

  const reader = new FileReader();
  reader.onloadend = () => {
    /** @type {string} */
    // @ts-expect-error
    const dataURL = reader.result;

    /** @type {HTMLImageElement} */
    // @ts-expect-error
    const input = document.getElementById('input');
    input.src = dataURL;
  };

  reader.readAsDataURL(files[0]);
}

/** @type {Map<string, Colour>} */
const memo = new Map();

function convertImage() {
  /** @type {HTMLImageElement} */
  // @ts-expect-error
  const input = document.getElementById('input');

  const canvas = document.createElement('canvas');
  canvas.width = input.width;
  canvas.height = input.height;
  canvas.getContext('2d').drawImage(input, 0, 0);
  const imageData = canvas
    .getContext('2d')
    .getImageData(0, 0, canvas.width, canvas.height);

  for (let i = 0; i < imageData.data.length; i += 4) {
    const inputColour = imageData.data.slice(i, i + 4);

    let closestColour = memo.get(inputColour.join(','));

    if (!closestColour) {
      closestColour = getClosestColour(inputColour);
      memo.set(inputColour.join(','), closestColour);
    }

    [
      imageData.data[i],
      imageData.data[i + 1],
      imageData.data[i + 2],
      imageData.data[i + 3],
    ] = closestColour;
  }

  memo.clear();

  canvas.getContext('2d').putImageData(imageData, 0, 0);

  /** @type {HTMLImageElement} */
  // @ts-expect-error
  const output = document.getElementById('output');
  output.src = canvas.toDataURL('image/jpg');
}

/**
 * @param {Colour} inputColour
 * @returns {Colour}
 */
function getClosestColour(inputColour) {
  let closestDistance = Infinity;
  let closestColour = new Uint8ClampedArray([0, 0, 0, 0]);

  for (const expressiveColour of expressiveColours) {
    const distance = Math.sqrt(
      (expressiveColour[0] - inputColour[0]) ** 2 +
        (expressiveColour[1] - inputColour[1]) ** 2 +
        (expressiveColour[2] - inputColour[2]) ** 2
    );

    if (distance < closestDistance) {
      closestDistance = distance;
      closestColour = expressiveColour;
    }

    if (closestDistance === 0) return closestColour;
  }

  return closestColour;
}
