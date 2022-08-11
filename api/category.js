import { AxiosMockRequest, MockCreated } from "../mocks";
import Category from "../mocks/Restaurants/Category/category.json";
MockCreated.onGet("/restaurants").reply(200, {
    Category,
});

export const categoryApi = AxiosMockRequest.get("/restaurants");

