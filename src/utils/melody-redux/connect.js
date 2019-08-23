import React, { Component } from "react";
import PropTypes from "prop-types";

export default (
  mapStateToProps,
  mapDispatchToProps,
  mapPluginToProps
) => WrappedComponent => {
  class Connect extends Component {
    constructor(props, context) {
      super(props, context);
      //initStore，初始化store
      this.store = this.context.store;
      this.store.subscribe(() => {
        this.forceUpdate();
      });

      this.state = {};
      this.renderComponent = [];

      const plugin = this.context.plugin;
      this.plugin = this.handlePlugin(plugin);
    }

    connectGetState() {
      const state = this.store.getState();
      return mapStateToProps(state);
    }

    connectDispatch() {
      const dispatch = this.store.dispatch;
      return mapDispatchToProps(dispatch);
    }

    connectPlugin() {
      return mapPluginToProps(this.plugin);
    }

    handlePlugin = (utils = {}) => {
      let methods = {};
      Object.keys(utils).forEach(item => {
        const plugin = utils[item];
        if (typeof plugin === "function") {
          methods[item] = () => plugin.call(this);
        } else if (typeof plugin === "object") {
          if (typeof plugin.install !== "function") {
            throw new Error("插件必须含有install方法");
          }
          const install = plugin.install();
          if (typeof install.initState !== "undefined") {
            const state = install.initState.call(this.state);
            this.state = { ...this.state, ...state };
            delete install.initState;
          }
          if (typeof install.render !== "undefined") {
            const initComponent = install.render.bind(this);
            this.renderComponent.push(initComponent);
            delete install.render;
          }
          const methods2 = {};
          Object.keys(install).forEach(item2 => {
            methods2[item2] = () => install[item2].call(this);
          });
          methods[item] = { ...methods2 };
        }
      });
      return methods;
    };

    render() {
      return (
        <React.Fragment>
          <WrappedComponent
            {...this.connectPlugin()}
            state={this.connectGetState()}
            dispatch={this.connectDispatch()}
          />
          {this.renderComponent.map((item, index) => (
            <React.Fragment key={index}>{item()}</React.Fragment>
          ))}
        </React.Fragment>
      );
    }
  }

  Connect.contextTypes = {
    store: PropTypes.object,
    plugin: PropTypes.object
  };

  return Connect;
};
