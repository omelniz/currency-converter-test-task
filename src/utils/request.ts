const API_URL = process.env.REACT_APP_API_URL;
const DEFAULT_HEADERS = {
  Accept: "application/json",
};

async function processResponse(response) {
  const payload = await response.json();

  if (payload.result === "ok") {
    return payload;
  } else {
    throw new Error(payload.error);
  }
}

async function request(action) {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: DEFAULT_HEADERS,
    body: JSON.stringify(action),
  });

  if (response.ok) {
    return processResponse(response);
  } else {
    throw new Error(response.statusText);
  }
}

export default request;
