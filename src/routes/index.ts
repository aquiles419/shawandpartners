import { Router } from "express";
import UsersController from "../controller/UserController";
import UserListController from "../controller/ListUsersController";
import UserReposController from "../controller/UserRepositoriesController";

const routes = Router();

routes.get("/api/users/:username/details", UsersController.showUser);
routes.get("/api/users", UserListController.listUsers);
routes.get(
  "/api/users/:username/repos",
  UserReposController.findUserRepository
);

export default routes;
