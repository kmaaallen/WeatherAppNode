import request from 'supertest';
import { app } from './index';

describe("Get weather information for London", () => {
    test("It should respond with weather information for London from latitude and longitude", async () => {
        const response = await request(app).get("/api/weather/51.509865/-0.118092");
        expect(response.body.data.name).toEqual("London");
        expect(response.statusCode).toBe(200);
    });
    test("It should respond with weather information for London from city name", async () => {
        const response = await request(app).get("/api/weather/London");
        expect(response.body.data.name).toEqual("London");
        expect(response.statusCode).toBe(200);
    });
});

