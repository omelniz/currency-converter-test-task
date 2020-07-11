import request from "./request";

const url = "http://test.com";
const action = {
  action: "login",
  login: "correct@email.com",
  password: "password",
};
const headers = { "Content-Type": "application/json", Accept: "application/json" };
const fetchMock = (global.fetch = jest.fn());
const data = { a: 1, b: 2 };
const json = jest.fn().mockResolvedValue(data);

afterEach(() => {
  fetchMock.mockReset();
});

it("should fetch and parse response", async () => {
  fetchMock.mockResolvedValueOnce({ ok: true, json });

  const response = await request(action);

  expect(response).toEqual(data);
  expect(fetchMock).toBeCalledWith(url, { method: "POST", body: JSON.stringify(action), headers });
});

it("should throw an error", async (done) => {
  const statusText = "Error";

  try {
    fetchMock.mockResolvedValueOnce({ ok: false, json, statusText });
    await request(action);
  } catch (err) {
    expect(err.message).toBe(statusText);
    done();
  }
});
