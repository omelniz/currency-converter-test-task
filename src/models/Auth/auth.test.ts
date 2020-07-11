import Auth, { AUTH_TOKEN } from "./index";

const request = jest.fn();

const setup = () => Auth.create({}, { request });

afterEach(() => {
  localStorage.removeItem(AUTH_TOKEN);
});

it("should not be authorized by default", () => {
  expect(setup().isAuthorized).toBeFalsy();
});

it("should keep authorized state", () => {
  localStorage.setItem(AUTH_TOKEN, "true");
  expect(setup().isAuthorized).toBeTruthy();
});

it("logout", () => {
  localStorage.setItem(AUTH_TOKEN, "true");

  const auth = setup();
  auth.logout();

  expect(auth.isAuthorized).toBeFalsy();
  expect(localStorage.getItem(AUTH_TOKEN)).toBeFalsy();
});

it("success login", (done) => {
  const values = { login: "correct@mail.com", password: "password" };
  request.mockResolvedValueOnce({ ok: true, json: () => {} });

  const auth = setup();

  auth.login(values).then(() => {
    expect(request).toBeCalledWith({ action: "login", ...values });
    expect(auth.isAuthorized).toBeTruthy();
    expect(localStorage.getItem(AUTH_TOKEN)).toBeTruthy();
    done();
  });
});

it("error login", (done) => {
  const values = { login: "correct@mail.com", password: "password" };
  request.mockRejectedValueOnce({ ok: false, statusText: "Error" });

  const auth = setup();

  auth.login(values).then((response) => {
    expect(request).toBeCalledWith({ action: "login", ...values });
    expect(auth.isAuthorized).toBeFalsy();
    expect(response).toEqual({ ok: false, statusText: "Error" });
    done();
  });
});
