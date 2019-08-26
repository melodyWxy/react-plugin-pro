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
            //render插件类 ： 因为插件中有一些处理函数不需要暴露到props，所以install方法必须存在
            if(typeof plugin.install!=='function'){
                throw new Error("render类插件必须含有install方法");
            }            
            const install = plugin.install();
            const  initState = install.initState?install.initState():{}
            this.state = {
              ...this.state,
              ...initState
            } 
            
            if (install && (typeof install.render !== 'undefined')) {
              //处理this
              for(const index in install){
                obj[index] = install[index].bind(this);
              }
              const initComponent = install.render.bind(this);
              this.renderComponent.push(initComponent);
              // delete install.render;
            }else{
              //其他类：处理this指向
              for(const index in plugin){
                obj[index] = plugin[index].bind(this);
              }
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
