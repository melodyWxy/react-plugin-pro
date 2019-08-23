import React from "react";
import PropTypes from "prop-types";

class Provider extends React.Component {
  constructor(props) {
    super(props);
  }

  getChildContext() {
    const { store, plugin } = this.props;
    return { store, plugin };
  }

  render() {
    return <React.Fragment>{this.props.children}</React.Fragment>;
  }
}

Provider.childContextTypes = {
  store: PropTypes.object,
  plugin: PropTypes.object
};

export default Provider;
