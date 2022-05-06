Feature: Formulas can be defined in the Grid.

  Requirements covered:
  - SAR-07

  Background: Spreadsheet opening before test
    Given Spreadsheet is opened
      And "loading ripple" does not exist

  @ID=E2E-01
  Scenario Template: Formulas are computed
    When double click on "<cell1>"
    Then selected cell id is "<cell1>"
     And editing mode is applied on "<cell1>"
    When enter "<val1>" value to "<cell1>" and press enter key
    Then "<cell1>" value is "<val1>"
    When double click on "<cell2>"
    Then selected cell id is "<cell2>"
     And editing mode is applied on "<cell2>"
    When enter "<val2>" value to "<cell2>" and press enter key
    Then "<cell2>" value is "<val2>"
    When double click on "<cell3>"
    Then selected cell id is "<cell3>"
     And editing mode is applied on "<cell3>"
    When enter "<formula>" value to "<cell3>" and press enter key
    Then "<cell3>" value is "<val3>"
    Examples:
      | cell1 | cell2 | cell3 | val1 | val2 | val3 | formula |
      | B5    | D10   | A1    | 5    | 118  | 123  | =B5+D10 |
      | J9    | F2    | G6    | -30  | -50  | -80  | =J9+F2  |
      | C7    | E3    | H8    | -30  | 50   | 20   | =C7+E3  |
