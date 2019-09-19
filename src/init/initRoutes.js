const { retrieveUserByName, addUser, logInUser } = require('../helpers/userHelpers/index');
const { retrievePost, createPost } = require('../helpers/postsHelper/index');

module.exports = app => {
  // User related paths
  app.post('/login', logInUser);
  app.get('/username', retrieveUserByName);
  app.post('/add-user', addUser);

  // Post related paths
  app.get('/get-posts', retrievePost);
  app.post('/add-post', createPost);
};