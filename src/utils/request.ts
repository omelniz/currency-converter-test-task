const API_URL = process.env.REACT_APP_API_URL;
const DEFAULT_HEADERS = {
  "Content-Type": "application/json",
  Accept: "application/json",
};

async function request(url: string, options: object = {}) {
  const headers = { ...DEFAULT_HEADERS, ...options.headers };
  const response = await fetch(`${API_URL}${url}`, { ...options, headers });
  const data = await response.json();

  if (response.ok) {
    return data;
  }

  throw new Error(response.statusText);
}

export default request;
