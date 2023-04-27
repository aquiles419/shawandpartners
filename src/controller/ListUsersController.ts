import axios, { AxiosResponse } from "axios";
import { Request, Response } from "express";

export class UserListController {
  async listUsers(req: Request, res: Response): Promise<Response> {
    try {
      const { since } = req.query;

      const baseUrl = "https://api.github.com";
      const url = `${baseUrl}/users`;

      const response: AxiosResponse = await axios.get(url, {
        params: { since },
        headers: {
          Authorization: `Token ${process.env.GITHUB_TOKEN}`,
        },
      });

      const nextPageLink = response.headers.link?.match(/<(.*?)>; rel="next"/);

      const usersData = {
        users: response.data,
        nextPage: nextPageLink ? nextPageLink[1] : null,
      };

      return res.json(usersData);
    } catch (error) {
      console.error(error);
      return res.status(500).json(i18n.__("InternalServerError"));
    }
  }
}
