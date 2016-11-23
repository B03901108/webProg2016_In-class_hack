import React from 'react';

const INObj = ({ nm, url }) => (
  <div className="obj-link">
    <a href={'http://' + url} target="_blank">{nm}</a>
  </div>
);

export default INObj;
