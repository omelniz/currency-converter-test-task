import request from "./request";

const url = "/url";
const fullUrl = `http://test.com${url}`;
const headers = { "Content-Type": "application/json", Accept: "application/json" };
const fetchMock = (global.fetch = jest.fn());
const data = { a: 1, b: 2 };
const json = jest.fn().mockResolvedValue(data);

afterEach(() => {
  fetchMock.mockReset();
});

it("should fetch and parse response", async () => {
  fetchMock.mockResolvedValueOnce({ ok: true, json });

  const response = await request(url);

  expect(response).toEqual(data);
  expect(fetchMock).toBeCalledWith(fullUrl, { headers });
});

it("should pass options", async () => {
  const options = { method: "GET", headers: { "X-CUSMOT": 1 } };

  fetchMock.mockResolvedValueOnce({ ok: true, json });

  const response = await request(url, options);

  expect(response).toEqual(data);
  expect(fetchMock).toBeCalledWith(fullUrl, { method: "GET", headers: { ...headers, "X-CUSMOT": 1 } });
});

it("should throw an error", async (done) => {
  const statusText = "Error";

  try {
    fetchMock.mockResolvedValueOnce({ ok: false, json, statusText });
    await request(url);
  } catch (err) {
    expect(err.message).toBe(statusText);
    done();
  }
});
