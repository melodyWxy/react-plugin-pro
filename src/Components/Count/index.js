import React from "react";
import { connect } from "../../utils/melody-redux";
import {
  ADD_COUNT,
  DELETE_COUNT,
  RESTLE_COUNT
} from "../../utils/Store/actionsType";

class Count extends React.Component {

  componentDidMount() {
    this.props.Loading.showLoading();

    setTimeout(() => {
      this.props.Loading.closeLoading();
    }, 1500)
  }

  render() {
    return (
      <div>
        Count: {this.props.state.count}
        <button onClick={() => this.props.dispatch({ type: RESTLE_COUNT })}>
          Reset
        </button>
        <button onClick={() => this.props.dispatch({ type: ADD_COUNT })}>+</button>
        <button onClick={() => this.props.dispatch({ type: DELETE_COUNT })}>-</button>
      </div>
    )
  }
}

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => dispatch;

const mapUtilsToProps = utils => utils;

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mapUtilsToProps
)(Count);
