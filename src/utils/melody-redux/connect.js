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

      const plugins = this.context.plugins;
      // console.log(plugins,1)
      this.plugins = this.handlePlugin(plugins);
    }

    connectGetState() {
      const state = this.store.getState();
      return this.checkMethod(mapStateToProps, state);
    }

    connectDispatch() {
      const dispatch = this.store.dispatch;
      return this.checkMethod(mapDispatchToProps, dispatch);
    }

    connectPlugin() {
      return this.checkMethod(mapPluginToProps, this.plugins);
    }

    /* 判断有没有方法，如果没有直接返回值 */
    checkMethod(method, data) {
      if (method) {
        return method(data);
      } else {
        return data;
      }
    }

    handlePlugin = (plugins = {}) => {
      const method =  {};
      for(const item in plugins){
        const plugin = plugins[item];
        switch(typeof plugin) {
          case 'function':
            //只需处理this指向；
            method[item]= plugin.bind(this);
            break;
          case 'object': 
            const obj = {}
            //功能插件的处理
            let install;
            if(typeof plugin.install==='function'){
              //如果具备初始化方法:
              install = plugin.install;
              this.state = {
                ...this.state,
                ...install.initState
              } 
            }
            if (install && (typeof plugin.render !== 'undefined')) {
              //如果是render类插件（基于组件的插件）
              if(typeof install!=='function'){
                throw new Error("render类插件必须含有install方法");
              }
              const initComponent = plugin.render.bind(this);
              this.renderComponent.push(initComponent);
              delete install.render;
            }
            //处理this指向
            for(const index in plugin){
              obj[index] = plugin[index].bind(this);
            }
            method[item] = obj;
            break;
          default:
            method[item] = plugin;
        }
      }
      return method;
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
    plugins: PropTypes.object
  };

  return Connect;
};
