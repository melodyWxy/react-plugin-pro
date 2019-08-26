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
  };

  componentDidMount() {
    this.setState({
      text: this.props.login.isLogin() ? "有token，登陆了" : "没有token，没有登陆"
    });
  }

  render() {
    const {dispatch,loading,login} = this.props;
    console.log(this.props);
    return (
      <div>
        <div>
          {this.state.text} <button onClick={login.goLogin}>登陆</button>
        </div>
        Count: {this.props.state.count}
        <button onClick={() => dispatch({ type: RESTLE_COUNT })}>
          Reset
        </button>
        <button onClick={() => dispatch({ type: ADD_COUNT })}>
          +
        </button>
        <button onClick={() => dispatch({ type: DELETE_COUNT })}>
          -
        </button>
        <div>
          <button onClick={loading.showLoading}>展示loading</button>
          <button onClick={loading.closeLoading}>关闭loading</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => dispatch;

const mapPluginToProps = ({ login, loading}) => ({
  login,
  loading,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mapPluginToProps
)(Count);
