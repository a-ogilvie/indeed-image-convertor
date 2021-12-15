import React, { useEffect } from 'react';
import { FileUploaderPresentationalComponent } from './presentation';
import { AppContext } from '../../context';
import { Types } from '../../reducers';
import convertImage from '../../Convertor';

type State = { dragging: boolean; file: File | null };

let dragEventCounter = 0;
export const FileUploader = () => {
  const { dispatch } = React.useContext(AppContext);
  const initialState: State = { dragging: false, file: null };

  const [data, setData] = React.useState(initialState);

  const process = (file: Blob) => {
    const fileReader = new FileReader();
    fileReader.addEventListener('loadend', (evt) => {
      if (evt.target?.result) {
        dispatch({
          payload: {
            before: evt.target.result.toString(),
            converting: true,
            file,
          },
          type: Types.Upload,
        });
        const img = new Image();
        img.addEventListener('load', () => {
          const output = convertImage(img);
          dispatch({
            payload: { after: output, converting: false },
            type: Types.Converted,
          });
        });
        img.src = evt.target.result.toString();
      }
    });
    fileReader.readAsDataURL(file);
  };
  const dragEnterListener = (event: React.DragEvent<HTMLDivElement>) => {
    overrideEventDefaults(event);
    dragEventCounter += 1;
    setData({ ...data, dragging: true });
  };

  const dragLeaveListener = (event: React.DragEvent<HTMLDivElement>) => {
    overrideEventDefaults(event);
    dragEventCounter -= 1;

    if (dragEventCounter <= 0) setData({ ...data, dragging: false });
  };

  const dropListener = (event: React.DragEvent<HTMLDivElement>) => {
    overrideEventDefaults(event);
    dragEventCounter = 0;
    setData({ ...data, dragging: false });

    if (event.dataTransfer.items[0].type.split('/')[0] === 'image') {
      setData({ ...data, file: event.dataTransfer.files[0] });
      process(event.dataTransfer.files[0]);
    } else alert('Please upload an image.');
  };

  const overrideEventDefaults = (
    event: Event | React.DragEvent<HTMLDivElement>
  ) => {
    event.preventDefault();
    event.stopPropagation();
  };

  const onFileChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files?.[0]) {
      setData({ ...data, file: event.target.files[0] });
      process(event.target.files[0]);
    }
  };

  useEffect(() => {
    window.addEventListener('dragover', (event: Event) => {
      overrideEventDefaults(event);
    });
    window.addEventListener('drop', (event: Event) => {
      overrideEventDefaults(event);
    });
    return () => {
      window.removeEventListener('dragover', overrideEventDefaults);
      window.removeEventListener('drop', overrideEventDefaults);
    };
  });

  return (
    <FileUploaderPresentationalComponent
      dragging={data.dragging}
      file={data.file}
      onDrag={overrideEventDefaults}
      onDragEnd={overrideEventDefaults}
      onDragEnter={dragEnterListener}
      onDragLeave={dragLeaveListener}
      onDragOver={overrideEventDefaults}
      onDragStart={overrideEventDefaults}
      onDrop={dropListener}
    >
      <input
        accept="image/*"
        className="file-uploader__input"
        onChange={onFileChanged}
        style={{ textAlignLast: 'center' }}
        type="file"
      />
    </FileUploaderPresentationalComponent>
  );
};
