import React from "react";
import PropTypes from "prop-types";

class Provider extends React.Component {
  constructor(props) {
    super(props);
  }

  getChildContext() {
    const { store, utils } = this.props;
    return { store, utils };
  }

  render() {
    return <React.Fragment>{this.props.children}</React.Fragment>;
  }
}

Provider.childContextTypes = {
  store: PropTypes.object,
  utils: PropTypes.object
};

export default Provider;
