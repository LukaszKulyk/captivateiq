Feature: Standard spreadsheet layout: selections and highlights, navigation, data manipulation with keyboard, layout.
  - Keyboard Navigation
  - Highlight of referenced cell during edit mode

  Requirements covered:
  - SAR-01
  - SAR-02
  - SAR-03

  Background: Spreadsheet opening before test
    Given Spreadsheet is opened
    And "loading ripple" does not exist

  @ID=E2E-05
  Scenario: Keyboard navigation and interaction
   Given selected cell id is "A1"
    When press "downarrow" key
    Then selected cell id is "A2"
    When press "rightarrow" key
    Then selected cell id is "B2"
    When press tab key
    Then selected cell id is "C2"
    When press "uparrow" key
    Then selected cell id is "C1"
    When press "leftarrow" key
    Then selected cell id is "B1"


# P0: Finish E2E-06 test with the following steps:
# - Check that the layout is a 10x10 spreadsheet, containing letters and numbers
# - Check that selection mark is visible once a cell is highlighted
  @ID=E2E-06
  Scenario: Spreadsheet layout is 10x10 and contains letters and numbers as headers properly, selection mark is visible on cells
    When click on "A1"
    Then cell "A1" is marked
    When click on "B2"
    Then cell "B2" is marked
    When click on "C3"
    Then cell "C3" is marked
    When click on "D4"
    Then cell "D4" is marked
    When click on "E5"
    Then cell "E5" is marked
    When click on "F6"
    Then cell "F6" is marked
    When click on "G7"
    Then cell "G7" is marked
    When click on "H8"
    Then cell "H8" is marked
    When click on "I9"
    Then cell "I9" is marked
    When click on "J10"
    Then cell "J10" is marked
    Then "A11" does not exist
    And "K10" does not exist
