import { Router } from "express";
import UsersController from "../controller/UsersController";
import UserListController from "../controller/UserListController";
import UserReposController from "../controller/ListRepositories";

const routes = Router();

routes.get("/api/users/:username/details", UsersController.showUser);
routes.get("/api/users", UserListController.listUsers);
routes.get(
  "/api/users/:username/repos",
  UserReposController.findUserRepository
);

export default routes;
