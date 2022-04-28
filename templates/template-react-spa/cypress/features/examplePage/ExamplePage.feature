Feature: Example Page

    Scenario Outline: As a user, I want to see the <tooltip> tooltip
        Given I am on the "Example" page
        When I hover over the "<tooltip>" tooltip
        Then I see a tooltip with "<text>" text
        Examples:
            | tooltip   | text           |
            | Tooltip 1 | Tooltip text 1 |
            | Tooltip 2 | Tooltip text 1 |