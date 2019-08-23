import React from "react";

export const isLogin = function() {
  let accessToken = localStorage.getItem("accessToken");
  return !!accessToken
}

export const goLogin = function() {
  if(!isLogin()) {
    location.href = "/login"
  }
}

export const getLocation = function() {
  return {
    addrcessCode: "123123"
  }
}

export const loading = {
  install() {
    const { initState, showLoading, closeLoading, render } = this
    return {
      initState,
      showLoading,
      closeLoading,
      render
    }
  },
  initState(state) {  //如果插件依赖其他插件的state，可以在里面拿到
    return {
      visible: false
    }
  },
  showLoading() {
    if (!this.state.visible) {
      this.setState({
        visible: true
      })
    }
  },
  closeLoading() {
    if(this.state.visible) {
      this.setState({
        visible: false
      })
    }
  },
  render() {
    const { visible } = this.state || {};
    return visible ? <div >loading...</div> : null;
  }
};