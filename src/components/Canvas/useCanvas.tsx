import { useRef, useEffect } from 'react'

const useCanvas = (draw: (ctx: CanvasRenderingContext2D) => void) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    const context = canvasRef.current?.getContext('2d') as any
    draw(context)
  }, [draw])

  return canvasRef
}

export default useCanvas
