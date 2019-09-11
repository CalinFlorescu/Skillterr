const { retrieveUserByName, addUser } = require('../helpers/userHelpers/index');

module.exports = app => {
  app.get('/username', retrieveUserByName);
  app.post('/add-user', addUser);
};