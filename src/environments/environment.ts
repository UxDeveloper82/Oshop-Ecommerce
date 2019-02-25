// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
     apiKey: 'AIzaSyAesHDSpf8LEEnlObtB5h4QXlAq3agS01w',
    authDomain: 'oshop-d90ae.firebaseapp.com',
    databaseURL: 'https://oshop-d90ae.firebaseio.com',
    projectId: 'oshop-d90ae',
    storageBucket: 'oshop-d90ae.appspot.com',
    messagingSenderId: '933303167167'
  }
};
