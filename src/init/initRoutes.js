const { retrieveUserByName, addUser, logInUser } = require('../helpers/userHelpers/index');

module.exports = app => {
  app.post('/login', logInUser);
  app.get('/username', retrieveUserByName);
  app.post('/add-user', addUser);
};