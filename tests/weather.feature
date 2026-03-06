Feature: Weather API

    Scenario: Valid coordinates return weather data
        Given I have valid coordinates
        When I request the weather forecast
        Then the response status should be 200
        And the response should contain hourly and daily weather data

    Scenario: Daily forecast contains 7 days of data
        Given I have valid coordinates
        When I request the weather forecast
        Then the daily forecast should contain 7 days