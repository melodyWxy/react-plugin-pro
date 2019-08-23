export const loading = {
  install() {
    const { initState, showLoading, hiddleLoading, render } = this
    return {
      initState,
      showLoading,
      hiddleLoading,
      render
    }
  },
  initState({ state = {} }) {
    return {
      visible: false
    }
  },
  showLoading({ setState }) {
    setState({
      visible: true
    })
  },
  hiddleLoading({ setState }) {
    setState({
      visible: false
    })
  },
  render({ state = {} }) {
    const { visible } = state;
    return visible ? <div >loading...</div> : null ;
  }
};
