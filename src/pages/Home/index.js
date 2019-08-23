/*
 * @Date: 2019-08-23 23:50:33
 * @LastEditors: melodyWxy
 * @LastEditTime: 2019-08-24 00:07:23
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
        home 
      </div>
    )
  }
}

Home.defaultProps = {
  name: 'Stranger'
};