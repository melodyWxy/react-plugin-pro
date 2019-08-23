/*
 * @Date: 2019-08-24 00:42:05
 * @LastEditors: melodyWxy
 * @LastEditTime: 2019-08-24 01:27:42
 */
import { ADD_COUNT, DELETE_COUNT, RESTLE_COUNT } from "./actionsType";

const inItState = {
  count: 0
}

export default (state = inItState, action) => {
  switch (action.type) {
    case ADD_COUNT:
      return {
        ...state,
        count: state.count + 1
      };
    case DELETE_COUNT:
      return {
        ...state,
        count: state.count - 1
      };
    case RESTLE_COUNT:
      return inItState;
    default:
      return state;
  }
};
