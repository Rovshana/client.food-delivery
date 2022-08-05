import { AxiosMockRequest, MockCreated } from "../mocks";
import Users from "../mocks/Login/login.json";
MockCreated.onGet("/login").reply(200, {
  Users,
});
MockCreated.onPost("/login").reply(function (config) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve([201, { message: "success" }]);
    }, 1000);
  });
});

export const usersApi = AxiosMockRequest.get("/login");
export const usersPostApi = (item) => AxiosMockRequest.post("/login", item);
