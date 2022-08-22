import { AxiosMockRequest, MockCreated } from "../mocks";

MockCreated.onPost("/basket").reply(function (config) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve([201, { message: "success" }]);
    }, 1000);
  });
});

export const basketPostApi = (item) => AxiosMockRequest.post("/basket", item);