import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const clients = [
  {
    id: '1',
    name: 'George',
    surname: 'Best',
    birthdate: '',
    email: 'george@best.ie',
    type: 'owner',
    info: `Now that there is the Tec-9, a crappy spray gun from South Miami. This gun is advertised as the most popular 
      gun in American crime. Do you believe that shit? It actually says that in the little book that comes with it: the 
      most popular gun in American crime. Like they're actually proud of that shit.`
  },
  {
    id: '2',
    name: 'Andrea',
    surname: 'Pirlo',
    birthdate: '',
    email: 'andrea@pirlo.it',
    type: 'tenant',
    info: `slender plastic tag clipped to my shirt with my name printed on it? Do you see a little Asian child with a 
      blank expression on his face sitting outside on a mechanical helicopter that shakes when you put quarters in it? 
      No? Well, that's what you see at a toy store. And you must think you're in a toy store, because you're here 
      shopping for an infant named Jeb.`
  },
  {
    id: '3',
    name: 'Zinadine',
    surname: 'Zidane',
    birthdate: '',
    email: 'zinadine@zidane.fr',
    type: 'buyer',
    info: `Look, just because I don't be givin' no man a foot massage don't make it right for Marsellus to throw Antwone
      into a glass motherfuckin' house, fuckin' up the way the nigger talks. Motherfucker do that shit to me, he better 
      paralyze my ass, 'cause I'll kill the motherfucker, know what I'm sayin'?`
  }
]

//This would be performed on the server in a real app. Just stubbing in.
const generateId = (client) => {
  return clients.length +1
}

class ClientApi {
  static getAllClients() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], clients))
      }, delay)
    });
  }

  static saveClient (client) {
    client = Object.assign({}, client)
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate server-side validation
        const minClientNameLength = 3;
        if (client.name.length < minClientNameLength) {
          reject(`First Name must be at least ${minClientNameLength} characters.`);
        }

        if (client.surname.length < minClientNameLength) {
          reject(`Surname must be at least ${minClientNameLength} characters.`);
        }

        if (client.id) {
          const existingAuthorIndex = clients.findIndex(a => a.id == client.id);
          clients.splice(existingAuthorIndex, 1, client);
        } else {
          //Just simulating creation here.
          //The server would generate ids for new authors in a real app.
          //Cloning so copy returned is passed by value rather than by reference.
          client.id = generateId(client);
          clients.push(client);
        }

        resolve(client);
      }, delay);
    });
  }

  static deleteClient (clientId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const indexOfAuthorToDelete = clients.findIndex(client => {
          client.id == clientId;
        });
        clients.splice(indexOfAuthorToDelete, 1);
        resolve();
      }, delay);
    });
  }
}

export default ClientApi;
