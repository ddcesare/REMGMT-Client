import * as types from '../actions/actionTypes'
import initalState from './initialState'

export default function clientReducer (state = initalState.clients, action) {
  switch (action.type) {
    case types.LOAD_CLIENTS_SUCCESS:
      return action.clients

    default:
      return state
  }
}
