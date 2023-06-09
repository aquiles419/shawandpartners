import axios from "axios";
import { Request, Response } from "express";

export class UserRepositoriesController {
  async findUserRepository(req: Request, res: Response): Promise<Response> {
    try {
      const { username } = req.params;

      const baseUrl = "https://api.github.com";

      const url = `${baseUrl}/users/${username}/repos`;

      const response = await axios.get(url, {
        headers: {
          Authorization: `Token ${process.env.GITHUB_TOKEN}`,
        },
      });

      return res.json(response.data);
    } catch (error) {
      console.error(error);
      return res.status(500).json(i18n.__("InternalServerError"));
    }
  }
}
