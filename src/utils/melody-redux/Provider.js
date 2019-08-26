import React from "react";
import PropTypes from "prop-types";

class Provider extends React.Component {
  constructor(props) {
    super(props);
  }

  getChildContext() {
    const { store, plugins } = this.props;
    return { store, plugins };
  }

  render() {
    return <React.Fragment>{this.props.children}</React.Fragment>;
  }
}

Provider.childContextTypes = {
  store: PropTypes.object,
  plugins: PropTypes.object
};

export default Provider;
