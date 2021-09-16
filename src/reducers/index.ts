import { Reducer } from 'react';

type ActionMap<M extends { [index: string]: any }> = {
  [Key in keyof M]: M[Key] extends undefined
    ? { type: Key }
    : { type: Key; payload: M[Key] };
};

export enum Types {
  Converted = 'CONVERT_DONE',
  Upload = 'UPLOAD_PIC',
}

type ImageType = {
  file: Blob | null;
  before: string;
  after: string;
  converting: boolean;
};

type ImagePayload = {
  [Types.Converted]: { after: string; converting: boolean };
  [Types.Upload]: { file: Blob; before: string; converting: boolean };
};

export type ImageActions =
  ActionMap<ImagePayload>[keyof ActionMap<ImagePayload>];

export const imageReducer: Reducer<ImageType, ImageActions> = (
  state: ImageType,
  action: ImageActions
) => {
  switch (action.type) {
    case Types.Converted:
      return {
        after: action.payload.after,
        before: state.before,
        converting: action.payload.converting,
        file: state.file,
      };
    case Types.Upload:
      return {
        after: state.after,
        before: action.payload.before,
        converting: action.payload.converting,
        file: action.payload.file,
      };
    default:
      return state;
  }
};
