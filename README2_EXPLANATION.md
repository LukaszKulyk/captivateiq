## INTRODUCTION 
This is an additional file with explanation about all what have been done according to tech tasks.

## Tech Tasks P0:
P0: Finish E2E-06 test with the following steps:
* Check that the layout is a 10x10 spreadsheet, containing letters and numbers
* Check that selection mark is visible once a cell is highlighted

This part was finished during our meeting, test I have created works fine now.

## Tech Tasks P1:
P1: Write two new Cypress frontend integration test case, mocking out the response of the GET method based end-point (i.e. /api/cell/<string:col>_<int:row>/).
Cover positive and negative paths as well.

I have decided to modify cells.json file to cover two more cases. J10 cell was modified by adding has_ref_error=true. This case checks if #REF! error message is being displayed for proper cell. J9 cell was modified by adding string '<TEST>' in value. This case checks if the cell remains empty after writing any string value. 

## Tech Tasks P2:
P2: I have decided to add two more cases for the API. I checked in app.py file that two more cases can be covered. One for PUT method where I have added one more test which checks 409 status response and one for GET where I checks 404 status response.

## Tech Tasks P3:
P3: Imaginary Non-Functional testing scenarios
This is a big topic. We could try to add some metrics to measure times of responses. We can try to perform some performance testing and check how the application behaves in case of load and stress tests. It is worth to consider some usability testing as well.