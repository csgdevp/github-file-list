import React from 'react';
import PropTypes from 'prop-types';
import FileListItem from './FileListItem';

function FileList({files}) {
    return (
      <div className="file-list">
          {files.map(file => (
            <FileListItem  key={file.id} file={file}/>
          ))}
      </div>
    )
  }

  FileList.propTypes = {
    files: PropTypes.array
  }

  export default FileList;