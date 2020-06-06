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
routes.get("/search/status", CaseController.findByStatus);
routes.put("/update/status/:id", CaseController.setStatus);
routes.put("/update/hospitalized/:id", CaseController.setHospitalized);

routes.get("/hospitalized", CaseController.getHospitalized);
routes.get("/tested", CaseController.getTested);

module.exports = routes;
