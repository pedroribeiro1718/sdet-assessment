import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

let city = "";
let suggestions: any;

Given("I enter a partial city name {string}", (cityName: string) => {
  city = cityName;
});

When("I request city suggestions", () => {
  cy.request(`/suggest?query=${city}`).then((response) => {
    expect(response.status).to.eq(200);
    suggestions = response.body;
  });
});

Then("I should receive at least one suggestion", () => {
  expect(suggestions.length).to.be.greaterThan(0);
});

Then("each suggestion should contain latitude and longitude", () => {
  suggestions.forEach((s: any) => {
    expect(s).to.have.property("name");
    expect(s).to.have.property("lat");
    expect(s).to.have.property("lon");
  });
});

Then("I should receive no suggestions", () => {
  expect(suggestions).to.be.an("array");
  expect(suggestions.length).to.eq(0);
});