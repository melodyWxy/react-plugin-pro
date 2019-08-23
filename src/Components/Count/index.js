import React from "react";
import { connect } from "../../utils/melody-redux";
import {
  ADD_COUNT,
  DELETE_COUNT,
  RESTLE_COUNT
} from "../../utils/Store/actionsType";

class Count extends React.Component {

  state = {
    text: ""
  }

  componentDidMount() {
    this.setState({
      text: this.props.isLogin() ? "登陆了" : "没有登陆"
    })
  }

  render() {
    return (
      <div>
        <div>{this.state.text}</div>
        Count: {this.props.state.count}
        <button onClick={() => this.props.dispatch({ type: RESTLE_COUNT })}>
          Reset
        </button>
        <button onClick={() => this.props.dispatch({ type: ADD_COUNT })}>+</button>
        <button onClick={() => this.props.dispatch({ type: DELETE_COUNT })}>-</button>
        <div>
          <button onClick={this.props.Loading.showLoading}>展示loading</button>
          <button onClick={this.props.Loading.closeLoading}>关闭loading</button>
        </div>
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
