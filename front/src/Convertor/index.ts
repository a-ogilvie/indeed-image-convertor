import ExpressiveColour from './expressiveColour'

type Colour = Uint8ClampedArray

const memo = new Map<string, Colour>()

const ConvertImage = (image: HTMLImageElement) => {
  const canvas = document.createElement('canvas')
  canvas.width = image.width
  canvas.height = image.height
  canvas.getContext('2d')?.drawImage(image, 0, 0)
  const imageData = canvas
    .getContext('2d')
    ?.getImageData(0, 0, canvas.width, canvas.height)
  if (!imageData) return ''

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

  memo.clear()

  canvas.getContext('2d')?.putImageData(imageData, 0, 0)
  console.log('done!')
  return canvas.toDataURL('image/jpg')
}

function getClosestColour(inputColour: Colour): Colour {
  let closestDistance = Infinity
  let closestColour = new Uint8ClampedArray([0, 0, 0, 0])

  for (const expressiveColour of ExpressiveColour) {
    const distance = Math.sqrt(
      (expressiveColour[0] - inputColour[0]) ** 2 +
        (expressiveColour[1] - inputColour[1]) ** 2 +
        (expressiveColour[2] - inputColour[2]) ** 2,
    )

    if (distance < closestDistance) {
      closestDistance = distance
      closestColour = expressiveColour
    }

    if (closestDistance === 0) return closestColour
  }

  return closestColour
}
export default ConvertImage
