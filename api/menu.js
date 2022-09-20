import { AxiosMockRequest, MockCreated } from "../mocks";
import data from '../mocks/Menu/menu.json'
MockCreated.onGet("/menu").reply(200, {
    menu: data
});

export const menuApi = AxiosMockRequest.get("/menu");
