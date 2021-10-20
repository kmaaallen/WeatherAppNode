import request from 'supertest';
import { app } from './index';

describe("Get weather information for London", () => {
    test("It should respond with weather information for London from latitude and longitude", async () => {
        const response = await request(app).get("/api/weather/51.509865/-0.118092");
        expect(response.body.weatherNow.name).toEqual("London");
        expect(response.statusCode).toBe(200);
    });
    test("It should respond with weather information for London from city name", async () => {
        const response = await request(app).get("/api/weather/London");
        expect(response.body.weatherNow.name).toEqual("London");
        expect(response.statusCode).toBe(200);
    });
    test("It should return today + 7 day forecast when requesting with city coordinates", async () => {
        const response = await request(app).get("/api/weather/51.509865/-0.118092");
        expect(response.body.weatherNow.name).toEqual("London");
        expect(response.body.forecast.daily.length).toEqual(8);
        expect(response.statusCode).toBe(200);
    });
    test("It should return today + 7 day forecast when requesting with city name", async () => {
        const response = await request(app).get("/api/weather/London");
        expect(response.body.weatherNow.name).toEqual("London");
        expect(response.body.forecast.daily.length).toEqual(8);
        expect(response.statusCode).toBe(200);
    });
});

