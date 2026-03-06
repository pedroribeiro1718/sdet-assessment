import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

let lat: number;
let lon: number;
let weather: any;
let status: number;

Given("I have valid coordinates", () => {
  lat = -20.75;
  lon = -46.625;
});

When("I request the weather forecast", () => {
  cy.request(`/weather?lat=${lat}&lon=${lon}`).then((response) => {
    status = response.status;
    weather = response.body;
  });
});

Then("the response status should be 200", () => {
  expect(status).to.eq(200);
});

Then("the response should contain hourly and daily weather data", () => {
  expect(weather).to.have.property("hourly");
  expect(weather).to.have.property("daily");
});

Then("the daily forecast should contain 7 days", () => {
  expect(weather.daily.time.length).to.eq(7);
});