# SDET Assessment – Activity Ranking API and Front End

## Overview

[Screencast_20260306_165951.webm](https://github.com/user-attachments/assets/41874a79-4999-43f6-826e-534c362e56ad)

This repository contains my submission for the SDET assessment (**Activity Ranking API – City-Based Weather Forecast Integration with Search Suggestions** ticket).

The assignment asked for:

- Gherkin-style BDD scenarios
- Automated tests fulfilling said scenarios
- Manual test script
- README file explaining approach, AI usage, and trade-offs

My submission covers the two deliverables requested by the assignment as follows:

- **API automation** using Cypress + Cucumber, since the API is the system under test provided in the proposal assessment
- **Manual testing of a yet-to-be-developed front end component**, because the ticket describes a user-facing flow built around a search box, autocomplete suggestions, and ranked activity results, even though no access to a front end demo or playground was provided.

## Approach

I treated the feature as a user journey supported by three API endpoints:

1. **Suggestions endpoint** – provides autocomplete while the user types city names; also returns latitude and longitude for each city returned
2. **Weather endpoint** – provides weather forecast data based on latitude and longitude
3. **Activities endpoint** – ranks activities based on forecast conditions

This keeps the scenarios small, readable, and easy to maintain within the time-frame of the assessment.

The tests combine:

- **Contract checks**  
  response status, presence of key fields

- **Chaining workflow checks**  
  city => coordinates => activities

- **Business-logic checks**
  e.g. if total snowfall is `0`, then the Skiing score should be `0`

## Structure

The expected submission mentioned a `bdd-scenarios.feature` file in the root directory.  
In this submission, I split the BDD criteria into **three feature files inside `tests/`** instead:

The repository structure is as follows:
```plaintext
.
├── cypress/
├── tests/
│   ├── activity-ranking.feature
│   ├── activity-ranking.ts
│   ├── suggestions.feature
│   ├── suggestions.ts
│   ├── weather.feature
│   └── weather.ts
├── cypress.config.js
├── manual-test-script.md
├── package.json
├── package-lock.json
├── tsconfig.json
└── .gitignore
```

This keeps each endpoint/behavior self-contained and makes the corresponding step definitions easier to locate.

## Environment setup

**Prerequisites**
- Node.js
- npm

From the root directory:

**Install dependencies**
```bash
npm install
```

**Running the automated tests headlessly**
```bash
npx cypress run
```

## Why the “reasoning” automated test step fails

One of the acceptance criteria states that the activity response should include:

- Date  
- Activity name  
- Rank  
- Reasoning  

The automated test therefore includes a step asserting that every returned activity contains a **non-empty `reasoning` field**.

This is an intentional **spec-validation check**. If the live API response omits `reasoning`, the scenario should fail, because the implementation does not meet the documented acceptance criteria.

## Manual test script

The manual test script is provided in:

`manual-test-script.md`
`manual-test-script.csv`

Please **view the raw output**, since it is written in a **tabular, TestRail-friendly format**, focused on the imagined frontend behavior described in the ticket:

- Typing in the search box
- Seeing autocomplete suggestions
- Selecting a city
- Loading ranked activities
- Validating displayed reasoning and edge cases

The CSV file could be easily imported into TestRail or similar test management/test execution platforms.

It also contains additional empty colums for manual test execution tracking (in a scenario where the tester is meant to execute the test directly via the spreadsheet):
- Actual Result
- Status
- Bug IDs

## AI assistance

Considering time constraints, AI was used as a **development aid**.

It assisted with:

- Structuring the initial **BDD scenarios**
- Shaping the **manual test script** into a TestRail-friendly format
- Troubleshooting **Cypress/Cucumber configuration issues**
- Keeping the submission feasible within the **2–3 hour time-allotment**

**I reviewed and adapted all generated suggestions manually**, especially when the live API behavior was different from the acceptance criteria discussed in the proposal.

---

## Omissions and trade-offs

Given the **2–3 hour target**, I made the following trade-offs:

- I used **Cypress** because I am already comfortable with it, prioritizing execution speed and clarity over exploring an API-only stack, which would definitely be more suitable for a production environment.
- I kept the suite focused on **critical/high-priority scenarios** rather than building a large matrix of edge cases.
- I did **not implement CI workflow automation** or Gherkin-to-manual-script conversion, because that would have been disproportionate for the exercise. This would however be my suggestion, since Gherkin does lend itself well to convertibility to manual test cases, and avoiding multiple sources-of-truth is a good QA/organizational practice.
- The manual script is written around the **intended frontend behavior**, while the automated tests exercise the **backend APIs directly**.

---

## Final notes

This submission is designed to demonstrate:

- **BDD thinking** aligned with the feature ticket
- **Simple API automation** that can be scaled and made more impactful in an iterative manner
- **Traceability between automated and manual testing**, with manual testing focused on the end-user jorney rather than API endpoints or performance testing.
