import React from 'react';
import { connect } from 'react-redux';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import { requestThoughts } from '../actions';

import Thought from './thought';

export class ThoughtList extends React.Component {
  componentDidMount() {
    this.props.requestThoughts();
  }

  render() {
    const selectedCategory = this.props.category;
    return (
    
    		
    		 	
    		
      <ul>
      
      <div className="panel panel-primary">		
	     
	     <div className="panel-heading">Thoughts</div>
	     
	     <div className="panel-body">
        <ReactCSSTransitionGroup
          transitionName="thoughts"
          transitionAppear={true}
          transitionAppearTimeout={600}
          transitionEnterTimeout={600}
          transitionLeaveTimeout={400}
        >
          {this.props.thoughts
            .filter(thought => thought.category === selectedCategory)
            .map(thought => {
              return <Thought key={thought.id} thought={thought} />;
            })}
        </ReactCSSTransitionGroup>
        
        </div>
        </div>
        
      </ul>
      
     
    );
  }
}

export default connect(({ thoughts, category }) => ({ thoughts, category }), {
  requestThoughts
})(ThoughtList);
