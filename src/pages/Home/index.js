/*
 * @Date: 2019-08-23 23:50:33
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2019-08-24 02:50:53
 */
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