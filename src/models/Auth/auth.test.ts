import { FORM_ERROR } from "final-form";
import Auth, { saveAuth, clearAuth, getAuth } from "./index";

const request = jest.fn();

const setup = () => Auth.create({}, { request });

afterEach(() => {
  clearAuth();
});

it("should not be authorized by default", () => {
  expect(setup().isAuthorized).toBeFalsy();
});

it("should keep authorized state", () => {
  saveAuth();
  expect(setup().isAuthorized).toBeTruthy();
});

it("logout", () => {
  saveAuth();

  const auth = setup();
  auth.logout();

  expect(auth.isAuthorized).toBeFalsy();
  expect(getAuth()).toBeFalsy();
});

it("success login", (done) => {
  const values = { login: "correct@mail.com", password: "password" };
  request.mockResolvedValueOnce({ ok: true, json: () => {} });

  const auth = setup();

  auth.login(values).then(() => {
    expect(request).toBeCalledWith({ action: "login", ...values });
    expect(auth.isAuthorized).toBeTruthy();
    expect(getAuth()).toBeTruthy();
    done();
  });
});

it("error login", (done) => {
  const submitError = "Server Error";
  const values = { login: "correct@mail.com", password: "password" };
  request.mockRejectedValueOnce(new Error(submitError));

  const auth = setup();

  auth.login(values).then((response) => {
    expect(request).toBeCalledWith({ action: "login", ...values });
    expect(auth.isAuthorized).toBeFalsy();
    expect(response).toEqual({ [FORM_ERROR]: submitError });
    done();
  });
});
