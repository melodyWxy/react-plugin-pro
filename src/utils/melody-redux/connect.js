import React, { Component } from "react";
import PropTypes from "prop-types";

export default (
  mapStateToProps,
  mapDispatchToProps,
  mapUtilsToProps
) => WrappedComponent => {
  console.log(mapStateToProps, mapDispatchToProps, mapUtilsToProps);
  class Connect extends Component {
    constructor(props, context) {
      super(props, context);
      this.store = this.context.store;
      this.utils = this.context.utils;
      console.log(this.utils)
      this.handleUtils(this.utils)
      this.store.subscribe(() => {
        this.forceUpdate()
      })
    }

    connectGetState() {
        const state = this.store.getState()
        return mapStateToProps(state)
    }

    connectDispatch() {
        const dispatch = this.store.dispatch
        return mapDispatchToProps(dispatch)
    }

    connectUtils() {
        return mapUtilsToProps(this.utils)
    }

    handleUtils(utils) {
        
    }

    render() {
      return <WrappedComponent { ...this.connectUtils() } state={this.connectGetState()} dispatch={this.connectDispatch()} />;
    }
  }

  Connect.contextTypes = {
    store: PropTypes.object,
    utils: PropTypes.object,
  };

  return Connect;
};
