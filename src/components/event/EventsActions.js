import React from 'react';
import PropTypes from 'prop-types';

const EventsActions = ({ children }) => {
  
  return (
    <div>
      <div className="events-actions">
        <div>{children}</div>
      </div>
    </div>
    
  );
};

EventsActions.propTypes = {
  children: PropTypes.node.isRequired,
}

export default EventsActions;