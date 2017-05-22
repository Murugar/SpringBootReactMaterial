import React from 'react';
import { connect } from 'react-redux';
import Toggle from 'material-ui/Toggle';
import { Card, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';


import 'bootstrap/dist/css/bootstrap.css';

import { createThought, changeThought, changeCategory } from '../actions';

const styles = {
  label: {
    float: 'left',
    marginLeft: 30,
    marginRight: 10,
    marginTop: 8,
    color: 'rgba(0, 0, 255, 0.870588)'
  },
  toggle: {
    marginTop: 7,
    width: null,
    display: 'inline-block',
    marginBottom: 16,
    color: 'rgba(0, 255, 255, 0.870588)'
  }
};

export class ThoughtInput extends React.Component {
  handleNewThought() {
    this.props.createThought({
      category: this.props.category,
      text: this.props.thought
    });
  }

  handleToggleChange(event, toggled) {
    const newCategory = toggled ? 'life' : 'work';
    this.props.changeCategory(newCategory);
  }

  render() {
    const { category, thought, changeThought } = this.props;
    return (
    		
    		 	
    		
    		
      
     
      
      
        
        
        <div className="panel panel-primary">		
	     
	     <div className="panel-heading">Add Thoughts</div>
	     
	     <div className="panel-body">
          <textarea
            value={thought}
            onChange={event => changeThought(event.target.value)}
          />
          <label style={styles.label} className="text-primary">Work</label>
          <Toggle
            label="Life"
            toggled={category === 'work' ? false : true}
            labelPosition="right"
            onToggle={this.handleToggleChange.bind(this)}
            style={styles.toggle}
          />
          <div style={{ textAlign: 'right', float: 'right', color: 'blue', background : 'red' }}>
            <RaisedButton
              className="remember-button"
              secondary={true}
              label="Remember"
              onClick={this.handleNewThought.bind(this)}
            />
          </div>
            
            </div>
            </div>
      
            
         
     
        
      
    );
  }
}

export default connect(({ category, thought }) => ({ category, thought }), {
  createThought,
  changeThought,
  changeCategory
})(ThoughtInput);
