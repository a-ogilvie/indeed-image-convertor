import React from 'react';

type PresentationalProps = {
  dragging: boolean;
  file: File | null;
  onDrag: (event: React.DragEvent<HTMLDivElement>) => void;
  onDragStart: (event: React.DragEvent<HTMLDivElement>) => void;
  onDragEnd: (event: React.DragEvent<HTMLDivElement>) => void;
  onDragOver: (event: React.DragEvent<HTMLDivElement>) => void;
  onDragEnter: (event: React.DragEvent<HTMLDivElement>) => void;
  onDragLeave: (event: React.DragEvent<HTMLDivElement>) => void;
  onDrop: (event: React.DragEvent<HTMLDivElement>) => void;
};

export const FileUploaderPresentationalComponent: React.FC<PresentationalProps> =
  (props) => {
    const {
      dragging,
      file,
      onDrag,
      onDragStart,
      onDragEnd,
      onDragOver,
      onDragEnter,
      onDragLeave,
      onDrop,
    } = props;

    let uploaderClasses = 'file-uploader';
    if (dragging) {
      uploaderClasses += ' file-uploader--dragging';
    }

    const fileName = file?.name ?? 'Upload an image';
    return (
      <div
        className={uploaderClasses}
        onDrag={onDrag}
        onDragStart={onDragStart}
        onDragEnd={onDragEnd}
        onDragOver={onDragOver}
        onDragEnter={onDragEnter}
        onDragLeave={onDragLeave}
        onDrop={onDrop}
      >
        <div className="file-uploader__contents">
          <span className="file-uploader__file-name">{fileName}</span>
          <span>Drag & drop file</span>
          <span>or</span>
          {props.children}
        </div>
      </div>
    );
  };
