import * as types from './actionTypes'
import ClientApi from '../api/mockClientApi'

export function loadClientsSuccess (clients) {
  return {type: types.LOAD_CLIENTS_SUCCESS, clients}
}

export function loadClients () {
  return function(dispatch) {
    return ClientApi.getAllClients().then(clients => {
      dispatch(loadClientsSuccess(clients))
    }).catch(error => {throw(error)})
  }
}

