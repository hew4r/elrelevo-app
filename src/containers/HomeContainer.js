import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import AppFrame from "../components/AppFrame";
import EventsContainer from "./event/EventsContainer";
import EventsActions from "../components/event/EventsActions";

class HomeContainer extends Component {
  
  handleOnClick = () => {
    this.props.history.push('/events');
  }
  
  render() {
    return (
      <div>
        <AppFrame
            header='Inicio'
            body={
              <div>
                Pantalla Inicial
                <img src="data:image/png;base64,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"/>
                
                <EventsActions>
                  <button onClick={this.handleOnClick}>Listado de Eventos</button>
                </EventsActions>
     
              </div>
            }/>
      
      </div>
    );
  }
}

HomeContainer.propTypes = {};

export default withRouter(HomeContainer);