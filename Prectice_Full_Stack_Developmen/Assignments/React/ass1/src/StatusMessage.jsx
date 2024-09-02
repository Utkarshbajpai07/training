import React from 'react';

const StatusMessage = ({ sta }) => {
  if (sta === 'success') {
    return <div>Operation was successful</div>;
  } else if (sta === 'error') {
    return <div>There was an error</div>;
  } else {
    return null;
  }
};

export default StatusMessage;