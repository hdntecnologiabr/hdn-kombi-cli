Feature: Permissions

    Scenario: As a user, I want to see the Example page
        Given I have permission
        When I am on the "Example" page
        Then the page title must be "Example page"

    Scenario: As a user, I want to see a blank page if I don't have permission to access the Example page
        Given I don't have permission
        When I am on the "Example" page
        Then the page title must not exist