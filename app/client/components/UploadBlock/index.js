import React from 'react';
import './assets/uploadBlock.scss';

const UploadBlock = (props) => {
  const { addPhotoName, uploadPhoto, photo } = props;
  return (
    <div className="upload-block">
      <p>Please enter a name of photo</p>
      <input type="text" placeholder="name" onChange={addPhotoName} />

      <div className="upload-file">
        <input
          type="file"
          onChange={uploadPhoto}
        />
      </div>
      <img src={photo.url} alt="" />
    </div>
  );
};

UploadBlock.propTypes = {
  addPhotoName: React.PropTypes.func,
  uploadPhoto: React.PropTypes.func,
  photo: React.PropTypes.object,
};

export default UploadBlock;
