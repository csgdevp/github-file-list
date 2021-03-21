import React from 'react';
import ReactDOM from 'react-dom';
import FileData from './Components/FileData';
import FileList from './Components/FileList';
import './index.css';

ReactDOM.render(
  <FileList files={FileData}/>,
  document.getElementById('root')
);


