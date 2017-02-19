import * as ActionTypes from './actionTypes'
import * as ClientActions from './clientActions'
import mockClientApi from '../api/mockClientApi'

describe('clientActions', () => {
  it('should create an action to load clients', async () => {
    const dispatch = jest.fn()
    const expectedAction = {
      type: ActionTypes.LOAD_CLIENTS_SUCCESS,
      clients: [
        {'birthdate': '', 'email': 'george@best.ie', 'id': '1', 'info': 'Now that there is the Tec-9, a crappy spray gun from South Miami...', 'name': 'George', 'surname': 'Best', 'type': 'owner'},
        {'birthdate': '', 'email': 'andrea@pirlo.it', 'id': '2', 'info': 'slender plastic tag clipped to my shirt with my name printed on it?...', 'name': 'Andrea', 'surname': "Pirlo", 'type': 'tenant'},
        {'birthdate': '', 'email': 'zinadine@zidane.fr', 'id': "3", "info": "Look, just because I don\'t be givin\' no man a foot massage don\'t make it right for Marsellus to throw Antwone into a glass motherfuckin\' house...", 'name': 'Zinadine', 'surname': 'Zidane', 'type': 'buyer'}
      ]
    }

    // should return a fn since it's a thunk
    expect(typeof (ClientActions.loadClients(mockClientApi))).toEqual('function')
    // mocking dispatch
    await ClientActions.loadClients(mockClientApi)(dispatch)
    // assert that the dispatch was called with the expected action
    expect(dispatch).toBeCalledWith(expectedAction)
  })
})

