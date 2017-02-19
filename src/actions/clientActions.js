import * as types from './actionTypes'
import ClientApi from '../api/mockClientApi'

export function loadClientsSuccess (clients) {
  return {type: types.LOAD_CLIENTS_SUCCESS, clients}
}

  export function loadClients (Api = ClientApi) {
  return function(dispatch) {
    return Api.getAllClients().then(clients => {
      dispatch(loadClientsSuccess(clients))
    }).catch(error => {throw(error)})
  }
}

