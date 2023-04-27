import { Router } from "express";
import { UsersController } from "../controller/UserController";
import { UserListController } from "../controller/ListUsersController";
import { UserRepositoriesController } from "../controller/UserRepositoriesController";

const routes = Router();

const usersController = new UsersController();
const userListController = new UserListController();
const userRepositoriesController = new UserRepositoriesController();

routes.get("/api/users/:username/details", usersController.showUser);
routes.get("/api/users", userListController.listUsers);
routes.get(
  "/api/users/:username/repos",
  userRepositoriesController.findUserRepository
);

export default routes;
