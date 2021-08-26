// import React from 'react'
import useCanvas from './useCanvas'
// import { AppContext } from 'context'

const Canvas = (props: any) => {
  const { src, ...rest } = props

  function subSample(
    ctx: CanvasRenderingContext2D,
    oriX: number,
    oriY: number,
    ratio: number,
  ) {
    let imgd = ctx.getImageData(0, 0, oriX, oriY)
    let pix = imgd.data
    let result = []

    for (var i = 0; i < oriY; i += ratio) {
      for (var j = 0; j < oriX; j += ratio) {
        let sumR = 0,
          sumG = 0,
          sumB = 0,
          sumA = 0
        for (var x = 0; x < ratio; x += 1) {
          for (var y = 0; y < ratio; y += 1) {
            sumR += pix[(i * oriX + j + x * oriX + y) * 4]
            sumG += pix[(i * oriX + j + x * oriX + y) * 4 + 1]
            sumB += pix[(i * oriX + j + x * oriX + y) * 4 + 2]
            sumA += pix[(i * oriX + j + x * oriX + y) * 4 + 3]
          }
        }

        let avgR = Math.round(sumR / (ratio * ratio))
        let avgG = Math.round(sumG / (ratio * ratio))
        let avgB = Math.round(sumB / (ratio * ratio))
        let avgA = Math.round(sumA / (ratio * ratio))
        result.push(...[avgR, avgG, avgB, avgA])
      }
    }
    let result255 = Uint8ClampedArray.from(result)
    ctx.putImageData(new ImageData(result255, oriX / ratio), 0, 0)
  }
  const drawPic = (ctx: CanvasRenderingContext2D) => {
    const fileReader = new FileReader()
    fileReader.addEventListener('load', (evt) => {
      const img = new Image()
      img.addEventListener('load', () => {
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
        ctx.drawImage(img, 0, 0)
        subSample(ctx, img.width, img.height, Math.round(img.width / 300))
      })
      if (evt.target?.result) img.src = evt.target.result.toString()
    })
    if (src !== null) fileReader.readAsDataURL(src)
    return
  }

  const canvasRef = useCanvas(drawPic)

  return <canvas ref={canvasRef} {...rest} />
}

export default Canvas
