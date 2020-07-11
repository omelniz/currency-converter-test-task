const API_URL = process.env.REACT_APP_API_URL;
const DEFAULT_HEADERS = {
  "Content-Type": "application/json",
  Accept: "application/json",
};

async function request(action) {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: DEFAULT_HEADERS,
    body: JSON.stringify(action),
  });

  if (response.ok) {
    return response.json();
  }

  throw new Error(response.statusText);
}

export default request;
