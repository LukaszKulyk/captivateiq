Feature: References feature: circular references, edit mode references, interactive updates and highlighting,
  addition of reference.
  - Detection of circular references
  - Interactive updates: changing one value will automatically update all the other values depending on it
  - Add a cell reference by clicking it during edit mode.

  Requirements covered:
  - SAR-05
  - SAR-07

  Background: Spreadsheet opening before test
    Given Spreadsheet is opened
    And "loading ripple" does not exist

  @ID=E2E-02
  Scenario: Fields which has other references are updated interactively
    When double click on "G3"
    Then selected cell id is "G3"
    When enter "=H3+30" value to "G3" and press enter key
    Then "G3" value is "0"
    When double click on "H3"
    Then selected cell id is "H3"
    When enter "=I3" value to "H3" and press enter key
    Then "H3" value is "0"
    When double click on "I3"
    Then selected cell id is "I3"
    When enter "-30" value to "I3" and press enter key
    Then "G3" value is "0"
     And "H3" value is "-30"
     And "I3" value is "-30"

  @ID=E2E-03
  Scenario: Circular references are checked and violation are visible
    When double click on "E10"
    Then selected cell id is "E10"
    When enter "=F10" value to "E10" and press enter key
    Then "E10" value is "0"
    When double click on "F10"
    Then selected cell id is "F10"
    When enter "=E10" value to "F10" and press enter key
    Then "F10" value is "#REF!"
    When double click on "A10"
    Then selected cell id is "A10"
    When enter "=A10" value to "A10" and press enter key
    Then "A10" value is "#REF!"

  @ID=E2E-04
  Scenario: Additional cells can be referenced while edit mode is active (mouse)
    When double click on "A1"
     And enter "=" value to "A1"
     And click on "B10"
     And enter "+" value to "A1"
     And click on "C10"
