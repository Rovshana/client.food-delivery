import { AxiosMockRequest, MockCreated } from "../mocks";
import Category from "../mocks/Restaurants/Category/category.json";
MockCreated.onPost("/checkout").reply(function (config) {
    return new Promise(function (resolve, reject) {
      setTimeout(function () {
        resolve([201, { message: "success" }]);
      }, 1000);
    });
  });
  
export const checkoutApi = (item) => AxiosMockRequest.post("/checkout", item);