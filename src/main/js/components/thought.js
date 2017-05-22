import React from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import ActionDelete from 'material-ui/svg-icons/action/delete';
import IconButton from 'material-ui/IconButton';
import { Card, CardHeader, CardText } from 'material-ui/Card';

import { forgetThought } from '../actions';
import 'bootstrap/dist/css/bootstrap.css';

export class Thought extends React.Component {
  render() {
    const { thought, forgetThought } = this.props;
    const sinceHappened = moment(thought.creationTime).fromNow();

    return (
    		
     <div>	
    
     <br/>
     
     <div className="panel panel-danger">		
     
     <div className="panel-heading">Line Item</div>
     
     <div className="panel-body">
    		
      <li className="thought-card">
        <h4>
          <div className="relative-time"><span className="text-primary">{sinceHappened}</span></div>
          <IconButton
            className="delete-button"
            iconStyle={{
              color: 'rgba(255, 0, 0, 0.541176)',
              width: 25,
              height: 25
            }}
          >
            <ActionDelete onClick={forgetThought.bind(this, thought.id)} />
          </IconButton>
        </h4>
        <p>
        <span className="text-danger">{thought.text}</span>
        </p>
      </li>
      </div>
      </div>
      </div>
    );
  }
}

export default connect(({}, props) => props, {
  forgetThought
})(Thought);
