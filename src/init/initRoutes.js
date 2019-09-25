const {
  retrieveUserByName,
  addUser,
  logInUser
} = require("../handlers/userHandlers/index");
const { retrievePost, createPost } = require("../handlers/postHandlers/index");
const {
  getCommentsByPostId,
  addComment
} = require("../handlers/commentHandlers/index");
const {
  addFollower,
  retrieveFollowers
} = require("../handlers/followersHandlers/index");
const jwtVerification = require("../utils/jwtVerification");

module.exports = app => {
  app.use("/", jwtVerification);

  // User related paths
  app.post("/login", logInUser);
  app.get("/username", retrieveUserByName);
  app.post("/add-user", addUser);

  // Post related paths
  app.get("/posts", retrievePost);
  app.post("/posts", createPost);

  // Comment related paths
  app.get("/comments", getCommentsByPostId);
  app.post("/comment", addComment);

  // Follow related paths
  app.get("/follow", retrieveFollowers);
  app.post("/follow", addFollower);
};
