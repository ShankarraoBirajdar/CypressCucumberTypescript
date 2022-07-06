Feature: User want to Validate Practice From

    Scenario: Validate Practice From Scenario
        Given I Visit to QA Tools Application
        When I click the "pannelCategoryCards" of "commonLocators" with replace value "Forms"
        And I click the "spanPracticeForm" of "commonLocators"
        And I enter "Shankarrao" in "txtFirstName" of "practiceFormScreen"
        And I enter "Birajdar" in "txtLastName" of "practiceFormScreen"
        And I enter "skbirajdar10@gmail.com" in "txtEmail" of "practiceFormScreen"
        And I select the radiobutton "rdInput" of "commonLocators" with replace value "Male"