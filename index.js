'use strict';

/**
 * @typedef Colour
 * @property {number} r
 * @property {number} g
 * @property {number} b
 * @property {number} a
 */

const Jimp = require('jimp');

/** @type {Array<string>} */
const expressiveHexCodes = require('./expressive.json');
const expressiveColours = expressiveHexCodes.map(hexCodeToRGB);

const FILENAME = 'photo';
const FILETYPE = 'jpg';

/** @type {Map<string, Colour>} */
const memo = new Map();

async function run() {
  console.time('Time');

  const input = await Jimp.read(`./data/test_${FILENAME}.${FILETYPE}`);

  const { width, height } = input.bitmap;

  const result = new Jimp(width, height);

  for (let x = 0; x < width; x++) {
    for (let y = 0; y < height; y++) {
      const inputColour = Jimp.intToRGBA(input.getPixelColour(x, y));

      /** @type {Colour} */
      let closestColour = memo.get(colourToString(inputColour));

      if (!closestColour) {
        closestColour = getClosestColour(inputColour);
        memo.set(colourToString(inputColour), closestColour);
      }

      const colour = Jimp.rgbaToInt(
        closestColour.r,
        closestColour.g,
        closestColour.b,
        closestColour.a
      );
      result.setPixelColour(colour, x, y);
    }
  }

  result.write(`./data/result_${FILENAME}.${FILETYPE}`);

  console.timeEnd('Time');
}

run();

/**
 * @param {string} hex
 * @returns {Colour}
 */
function hexCodeToRGB(hex) {
  const r = Number.parseInt(hex[0] + hex[1], 16);
  const g = Number.parseInt(hex[2] + hex[3], 16);
  const b = Number.parseInt(hex[4] + hex[5], 16);

  return { r, g, b, a: 255 };
}

/**
 * @param {Colour} colour
 * @returns {string}
 */
function colourToString(colour) {
  return `${colour.r},${colour.g},${colour.b},${colour.a}`;
}

/**
 * @param {Colour} inputColour
 * @returns {Colour}
 */
function getClosestColour(inputColour) {
  let closestDistance = Infinity;
  /** @type {Colour} */
  let closestColour = null;

  for (const expressiveColour of expressiveColours) {
    const distance = Math.sqrt(
      (expressiveColour.r - inputColour.r) ** 2 +
        (expressiveColour.g - inputColour.g) ** 2 +
        (expressiveColour.b - inputColour.b) ** 2
    );

    if (distance < closestDistance) {
      closestDistance = distance;
      closestColour = expressiveColour;
    }

    if (closestDistance === 0) return closestColour;
  }

  return closestColour;
}
