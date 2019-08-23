import React from 'react'
import { connect } from '../../utils/melody-redux'
import { ADD_COUNT, DELETE_COUNT, RESTLE_COUNT } from '../../utils/Store/actionsType'

function Count(props){
  console.log(props)
    return (
      <div>
        Count: {props.state.count}
        <button onClick={() => props.dispatch({ type: RESTLE_COUNT })}>Reset</button>
        <button onClick={() => props.dispatch({ type: ADD_COUNT })}>+</button>
        <button onClick={() => props.dispatch({ type: DELETE_COUNT })}>-</button>
      </div>
    );
}

const mapStateToProps = (state) => state

const mapDispatchToProps = (dispatch) => dispatch 

const mapUtilsToProps = (utils) => utils 

export default connect(mapStateToProps, mapDispatchToProps, mapUtilsToProps)(Count)