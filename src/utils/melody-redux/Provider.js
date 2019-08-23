import React from "react";
import PropTypes from "prop-types";

class Provider extends React.Component {
  constructor(props) {
    super(props);
  }

  getChildContext() {
<<<<<<< HEAD
    return { store: this.props.store };
=======
    const { store, utils } = this.props;
    return { store, utils };
>>>>>>> 6e28a2c21affc19e8c72e18097ac8e5efa16ee48
  }

  render() {
    return <React.Fragment>{this.props.children}</React.Fragment>;
  }
}

Provider.childContextTypes = {
<<<<<<< HEAD
  store: PropTypes.object
=======
  store: PropTypes.object,
  utils: PropTypes.object
>>>>>>> 6e28a2c21affc19e8c72e18097ac8e5efa16ee48
};

export default Provider;
