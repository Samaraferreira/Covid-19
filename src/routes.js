const express = require("express");
const UserController = require("./controllers/UserController");
const CaseController = require("./controllers/CaseController");
const SessionController = require("./controllers/SessionController");

const routes = express.Router();

routes.post("/session", SessionController.create);

routes.get("/users", UserController.index);
routes.get("/users/:id", UserController.show);
routes.post("/register-user", UserController.create);

routes.get("/cases", CaseController.index);
routes.post("/register-case", CaseController.create);
routes.put("/update/status/:id", CaseController.setStatus);
routes.get("/search/status", CaseController.findByStatus);

module.exports = routes;
