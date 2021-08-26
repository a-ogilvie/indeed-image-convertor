import EXPRESSIVE_COLOURS from './ExpressiveColours'

type Colour = Uint8ClampedArray

const ConvertImage = (image: HTMLImageElement): string => {
  const canvas = document.createElement('canvas')
  canvas.width = image.width
  canvas.height = image.height
  canvas.getContext('2d')?.drawImage(image, 0, 0)
  const imageData = canvas
    .getContext('2d')
    ?.getImageData(0, 0, canvas.width, canvas.height)
  if (!imageData) return ''

  const memo = new Map<string, Colour>()

  for (let i = 0; i < imageData.data.length; i += 4) {
    const inputColour = imageData.data.slice(i, i + 4)

    let closestColour = memo.get(inputColour.join(','))

    if (!closestColour) {
      closestColour = getClosestColour(inputColour)
      memo.set(inputColour.join(','), closestColour)
    }
    ;[
      imageData.data[i],
      imageData.data[i + 1],
      imageData.data[i + 2],
      imageData.data[i + 3],
    ] = closestColour
  }

  canvas.getContext('2d')?.putImageData(imageData, 0, 0)
  return canvas.toDataURL('image/jpg')
}

function getClosestColour(inputColour: Colour): Colour {
  let closestDistance = Infinity
  let closestColour = new Uint8ClampedArray([0, 0, 0, 255])

  for (const expressiveColour of EXPRESSIVE_COLOURS) {
    const distance = Math.sqrt(
      (expressiveColour[0] - inputColour[0]) ** 2 +
        (expressiveColour[1] - inputColour[1]) ** 2 +
        (expressiveColour[2] - inputColour[2]) ** 2,
    )

    if (distance < closestDistance) {
      closestDistance = distance
      closestColour = expressiveColour
    }

    if (closestDistance === 0)
      return new Uint8ClampedArray([...closestColour, inputColour[3]])
  }

  return new Uint8ClampedArray([...closestColour, inputColour[3]])
}
export default ConvertImage
