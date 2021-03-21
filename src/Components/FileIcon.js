import PropTypes from 'prop-types';

function FileIcon({file}){
    let icon = 'far fa-file-alt';
    if(file.type === 'folder'){
      icon = 'fa-folder';
    }
    return (
      <span >
         <i className={`fa ${icon}`} />
      </span>
    )
  }

  FileIcon.propTypes = {
    file: PropTypes.object.isRequired
  }

export default FileIcon;