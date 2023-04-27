import axios from "axios";

const baseUrl = "https://api.github.com";

const username = "aquiles419";

const url = `${baseUrl}/users/${username}`;

it("should be able call API", async () => {
  const req = await axios.get(url);
  const underTest = req.data;
  expect(underTest.name).toBe(req.data.name);
  expect(req.status).toBe(200);
  expect(req.statusText).toBe("OK");
});
