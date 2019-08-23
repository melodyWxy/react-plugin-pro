import React, { Component } from "react";

export const isLogin = function() {
  let accessToken = localStorage.getItem("accessToken");
  return !!accessToken
}

export const Loading = {
  install() {
    const { initState, showLoading, closeLoading, render } = this
    return {
      initState,
      showLoading,
      closeLoading,
      render
    }
  },
  initState(state) {
    return {
      visible: false
    }
  },
  showLoading() {
    console.log("showLoading", this)
    this.setState({
      visible: true
    })
  },
  closeLoading() {
    this.setState({
      visible: false
    })
  },
  render() {
    const { visible } = this.state || {};
    return visible ? <div >loading...</div> : null ;
  }
};


export default {
  Loading,
  isLogin
}