import { Reducer } from 'react'

type ActionMap<M extends { [index: string]: any }> = {
  [Key in keyof M]: M[Key] extends undefined
    ? {
        type: Key
      }
    : {
        type: Key
        payload: M[Key]
      }
}

export enum Types {
  Upload = 'UPLOAD_PIC',
  Converted = 'CONVERT_DONE',
}

type ImageType = {
  file: Blob | null
  before: string
  after: string
  converting: boolean
}

type ImagePayload = {
  [Types.Upload]: {
    file: Blob
    before: string
    converting: boolean
  }
  [Types.Converted]: {
    after: string
    converting: boolean
  }
}

export type ImageActions =
  ActionMap<ImagePayload>[keyof ActionMap<ImagePayload>]

export const imageReducer: Reducer<ImageType, ImageActions> = (
  state: ImageType,
  action: ImageActions,
) => {
  switch (action.type) {
    case Types.Upload:
      return {
        file: action.payload.file,
        before: action.payload.before,
        after: state.after,
        converting: action.payload.converting,
      }
    case Types.Converted:
      return {
        file: state.file,
        before: state.before,
        after: action.payload.after,
        converting: action.payload.converting,
      }
    default:
      return state
  }
}
