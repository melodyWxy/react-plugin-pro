import React from "react";
import PropTypes from "prop-types";

class Provider extends React.Component {
  constructor(props) {
    super(props);
  }

  getChildContext() {
    return { store: this.props.store };
  }

  render() {
    return <React.Fragment>{this.props.children}</React.Fragment>;
  }
}

Provider.childContextTypes = {
  store: PropTypes.object
};

export default Provider;
