
/* 
 *  组件式插件，如果需要在插件中用jsx，需要引入react
 */

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
      visible: false,
      text: "loading...",
      style: {
        width: "100px",
        height: "100px",
        position: "fixed",
        top: "50%",
        left: "50%",
        margin: "-50px 0 0 -50px",
        textAlign: "center",
        lineHeight: "100px",
        border: "1px solid #ff4891",
        borderRadius: "5px",
        zIndex: "6",
      }
    }
  },
  showLoading(loadingConfig) {
    const { visible, style } = this.state
    if (!visible) {
      loadingConfig = typeof loadingConfig === "string" ? { text: loadingConfig } : loadingConfig
      loadingConfig.style = typeof loadingConfig.style === "undefined" ? style : { ...style, ...loadingConfig.style  }
      this.setState({
        visible: true,
        ...loadingConfig
      })
    }
  },
  closeLoading() {
    if(this.state.visible) {
      this.setState({
        visible: false,
      })
    }
  },

  render() {
    const { visible, text, style } = this.state || {};
    return visible ? <div style={style}>{text}</div> : null;
  }
};