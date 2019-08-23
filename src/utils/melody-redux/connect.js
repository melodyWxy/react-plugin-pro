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
<<<<<<< HEAD
=======
      this.utils = this.context.utils;
      console.log(this.utils)
      this.handleUtils(this.utils)
>>>>>>> 6e28a2c21affc19e8c72e18097ac8e5efa16ee48
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

<<<<<<< HEAD
    render() {
      return <WrappedComponent state={this.connectGetState()} dispatch={this.connectDispatch()} />;
=======
    connectUtils() {
        return mapUtilsToProps(this.utils)
    }

    handleUtils(utils) {
        
    }

    render() {
      return <WrappedComponent { ...this.connectUtils() } state={this.connectGetState()} dispatch={this.connectDispatch()} />;
>>>>>>> 6e28a2c21affc19e8c72e18097ac8e5efa16ee48
    }
  }

  Connect.contextTypes = {
<<<<<<< HEAD
    store: PropTypes.object
=======
    store: PropTypes.object,
    utils: PropTypes.object,
>>>>>>> 6e28a2c21affc19e8c72e18097ac8e5efa16ee48
  };

  return Connect;
};
