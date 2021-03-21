import React from 'react';
import PropTypes from 'prop-types';
import FileName from './FileName';
import FileIcon from './FileIcon';
import CommitMessage from './CommitMessage';
import Time from './Time';

const FileListItem = ({file}) => (
    <div className="file-list-item">
      <div className="file-name-icon">
        <FileIcon file={file}/>
        <FileName file={file}/>
      </div>
        <CommitMessage commit = {file.latestCommit} />
        <Time time={file.updated_at}/>
    </div>
  )

  FileListItem.propTypes = {
    file: PropTypes.object.isRequired
  }

export default FileListItem;