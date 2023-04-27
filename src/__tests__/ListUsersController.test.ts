import axios from "axios";

const baseUrl = "https://api.github.com";
const since = 2;

const url = `${baseUrl}/users?since=${since}`;

it("should be able call API", async () => {
  const req = await axios.get(url);
  expect(req.status).toBe(200);
  expect(req.statusText).toBe("OK");
});
