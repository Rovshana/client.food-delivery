import { AxiosMockRequest, MockCreated } from "../mocks";
import data from  "../mocks/Card/mealcard.json"
MockCreated.onGet("/dishes").reply(200, {
    dishes: data
});

export const dishesApi = AxiosMockRequest.get("/dishes");
