import React from 'react';
import ReactDOM from 'react-dom';

const text = 'Hello world';

ReactDOM.render(
  <div>{text}</div>,
  document.getElementById('root')
);

module.hot.accept();