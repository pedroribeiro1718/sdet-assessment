Feature: Suggestions endpoint

    Scenario: User gets city suggestions from a partial query
        Given I enter a partial city name "Votupo"
        When I request city suggestions
        Then I should receive at least one suggestion
        Then each suggestion should contain latitude and longitude

    Scenario: Unknown city returns no suggestions
        Given I enter a partial city name "zzzzzzzzzz"
        When I request city suggestions
        Then I should receive no suggestions