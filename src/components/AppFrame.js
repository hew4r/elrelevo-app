import React from 'react';
import PropTypes from 'prop-types';
import AppHeader from "./AppHeader";

const AppFrame = ({ header, body }) => {
  return (
    <div>
      <div className="className">
        <AppHeader title={header}/>
        <div>{body}</div>
        <div>Americanas por Relevos</div>
      </div>
    </div>
  );
};

AppFrame.propTypes = {
  header: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};

export default AppFrame;



