
import React from "react";

export default  {
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
      console.log(this,7)
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