import React from "react";
import Count from './../../Components/Count';
import PropTypes from 'prop-types';


export default  class Home extends React.Component{
   static propTypes={
    name:PropTypes.string
  }
  render(){
    return (
      <div>
        <Count></Count> 
      </div>
    )
  }
}

Home.defaultProps = {
  name: 'Stranger'
};