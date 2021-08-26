import React, { useEffect } from 'react'
import { FileUploaderPresentationalComponent } from './presentation'
import { AppContext } from '../../context'
import { Types } from '../../reducers'
import ConvertImage from '../../Convertor'

type State = {
  dragging: boolean
  file: File | null
}

let dragEventCounter = 0
export const FileUploader = () => {
  let { dispatch } = React.useContext(AppContext)
  const initialState: State = {
    dragging: false,
    file: null,
  }

  const [data, setData] = React.useState(initialState)

  let process = (file: Blob) => {
    const fileReader = new FileReader()
    fileReader.addEventListener('loadend', (evt) => {
      if (evt.target?.result) {
        dispatch({
          type: Types.Upload,
          payload: {
            file: file,
            before: evt.target.result.toString(),
            converting: true,
          },
        })
        const img = new Image()
        img.addEventListener('load', () => {
          let output = ConvertImage(img)
          dispatch({
            type: Types.Converted,
            payload: {
              after: output,
              converting: false,
            },
          })
        })
        img.src = evt.target.result.toString()
      }
    })
    fileReader.readAsDataURL(file)
  }
  let dragenterListener = (event: React.DragEvent<HTMLDivElement>) => {
    overrideEventDefaults(event)
    dragEventCounter++
    if (event.dataTransfer.items && event.dataTransfer.items[0]) {
      setData({ ...data, dragging: true })
    } else if (
      event.dataTransfer.types &&
      event.dataTransfer.types[0] === 'Files'
    ) {
      // This block handles support for IE - if you're not worried about
      // that, you can omit this
      setData({ ...data, dragging: true })
    }
  }

  let dragleaveListener = (event: React.DragEvent<HTMLDivElement>) => {
    overrideEventDefaults(event)
    dragEventCounter--

    if (dragEventCounter <= 0) {
      setData({ ...data, dragging: false })
    }
  }

  let dropListener = (event: React.DragEvent<HTMLDivElement>) => {
    overrideEventDefaults(event)
    dragEventCounter = 0
    setData({ ...data, dragging: false })

    if (event.dataTransfer.files && event.dataTransfer.files[0]) {
      if (event.dataTransfer.items[0].type.split('/')[0] === 'image') {
        setData({ ...data, file: event.dataTransfer.files[0] })
        process(event.dataTransfer.files[0])
      } else alert('Please upload an image.')
    }
  }

  let overrideEventDefaults = (
    event: Event | React.DragEvent<HTMLDivElement>,
  ) => {
    event.preventDefault()
    event.stopPropagation()
  }

  let onFileChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setData({ ...data, file: event.target.files[0] })
      process(event.target.files[0])
    }
  }

  useEffect(() => {
    window.addEventListener('dragover', (event: Event) => {
      overrideEventDefaults(event)
    })
    window.addEventListener('drop', (event: Event) => {
      overrideEventDefaults(event)
    })
    return () => {
      window.removeEventListener('dragover', overrideEventDefaults)
      window.removeEventListener('drop', overrideEventDefaults)
    }
  })

  return (
    <FileUploaderPresentationalComponent
      dragging={data.dragging}
      file={data.file}
      onDrag={overrideEventDefaults}
      onDragStart={overrideEventDefaults}
      onDragEnd={overrideEventDefaults}
      onDragOver={overrideEventDefaults}
      onDragEnter={dragenterListener}
      onDragLeave={dragleaveListener}
      onDrop={dropListener}
    >
      <input
        type="file"
        className="file-uploader__input"
        onChange={onFileChanged}
        accept="image/*"
        style={{ textAlignLast: 'center' }}
      />
    </FileUploaderPresentationalComponent>
  )
}
