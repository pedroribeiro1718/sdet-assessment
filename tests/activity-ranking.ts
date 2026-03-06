import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

let lat: number;
let lon: number;
let activities: any;

Given("I retrieve coordinates for the city {string}", (cityName: string) => {
  cy.request(`/suggest?query=${cityName}`).then((response) => {
    expect(response.status).to.eq(200);

    const first = response.body[0];
    lat = first.lat;
    lon = first.lon;

    return cy.request(`/activities?lat=${lat}&lon=${lon}`);
  }).then((response) => {
    expect(response.status).to.eq(200);
    activities = response.body;
  });
});

When("I request activity rankings using those coordinates", () => {
  cy.request(`/activities?lat=${lat}&lon=${lon}`).then((response) => {
    expect(response.status).to.eq(200);
    activities = response.body;
  });
});

Then("I should receive activity rankings for at least 1 activity", () => {
  expect(activities.activities.length).to.be.greaterThan(0);
});

Then("the reasoning for each ranking should be specified", () => {
  expect(activities).to.have.property("activities");

  activities.activities.forEach((item: any) => {
    expect(item).to.have.property("reasoning");
    expect(item.reasoning).to.be.a("string");
    expect(item.reasoning.trim().length).to.be.greaterThan(0);
  });
});

When("the response includes a weather snapshot", () => {
  expect(activities).to.have.property("snapshot");
});

Then("the total snowfall should be available", () => {
  expect(activities.snapshot).to.have.property("total_snowfall");
});

Then("if total snowfall is 0, the skiing activity score should be 0", () => {
  const snowfall = activities.snapshot.total_snowfall;

  const skiing = activities.activities.find(
    (a: any) => a.activity === "Skiing"
  );

  expect(skiing).to.exist;

  if (snowfall === 0) {
    expect(skiing.score).to.eq(0);
  }
});