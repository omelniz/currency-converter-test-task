import request from "./request";

const url = "http://test.com";
const action = {
  action: "login",
  login: "correct@email.com",
  password: "password",
};
const headers = { Accept: "application/json" };
const fetchMock = (global.fetch = jest.fn());
const data = { a: 1, b: 2 };
const validResponse = (payload) => ({ result: "ok", ...payload });
const json = jest.fn().mockResolvedValue(validResponse(data));

afterEach(() => {
  fetchMock.mockReset();
});

it("should fetch and parse response", async () => {
  fetchMock.mockResolvedValueOnce({ ok: true, json });

  const response = await request(action);

  expect(response).toEqual(validResponse(data));
  expect(fetchMock).toBeCalledWith(url, { method: "POST", body: JSON.stringify(action), headers });
});

it("should throw an system fetch error", async (done) => {
  const statusText = "Error";

  try {
    fetchMock.mockResolvedValueOnce({ ok: false, json, statusText });
    await request(action);
  } catch (err) {
    expect(err.message).toBe(statusText);
    done();
  }
});

it("should catch server error", async (done) => {
  const response = { result: "error", error: "Server Error" };
  json.mockResolvedValueOnce(response);

  try {
    fetchMock.mockResolvedValueOnce({ ok: true, json });
    await request(action);
  } catch (err) {
    expect(err.message).toBe(response.error);
    done();
  }
});
