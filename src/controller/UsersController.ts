import axios from "axios";
import { Request, Response } from "express";

export default class UsersController {
  async showUser(req: Request, res: Response): Promise<Response> {
    try {
      const { username } = req.params;

      const baseUrl = "https://api.github.com";
      const url = `${baseUrl}/users/${username}`;

      const response = await axios.get(url);

      return res.json(response.data);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  }
}

module.exports = new UsersController();
