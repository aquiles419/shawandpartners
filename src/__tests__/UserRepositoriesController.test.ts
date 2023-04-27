import axios from "axios";
const baseUrl = "https://api.github.com";

const username = "aquiles419";

const url = `${baseUrl}/users/${username}/repos`;

it("should be able call API", async () => {
  const req = await axios.get(url);
  const underTest = req.data[0];
  expect(underTest.name).toBe(req.data[0].name);
});
