    Feature: Activity ranking endpoint

    Scenario: User retrieves activities for a suggested city
        Given I retrieve coordinates for the city "Votuporanga"
        When I request activity rankings using those coordinates
        Then I should receive activity rankings for at least 1 activity
        And the reasoning for each ranking should be specified

    Scenario: Skiing receives a score of 0 when there is no snowfall
        Given I retrieve coordinates for the city "Abu Dhabi"
        When the response includes a weather snapshot
        Then the total snowfall should be available
        And if total snowfall is 0, the skiing activity score should be 0