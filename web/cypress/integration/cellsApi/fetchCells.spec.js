context('GET Cells', () => {
  it('receives all cell content', () => {
    cy.intercept('GET', 'api/cells/', { fixture: 'cells.json' }).as('getCells');

    cy.visit('/');

    cy.wait('@getCells');

    cy.get('[data-qa="A1"]').should('have.text', 15);
    cy.get('[data-qa="A3"]').should('have.text', 5);
    cy.get('[data-qa="B5"]').should('have.text', 10);
    cy.get('[data-qa="C8"]').should('have.text', -30);
    cy.get('[data-qa="E3"]').should('have.text', -30);
    cy.get('[data-qa="E6"]').should('have.text', -30);
    // P1: Write two new Cypress frontend integration test case, mocking out the response of the GET method based end-point (i.e. /api/cell/<string:col>_<int:row>/).
    // Cover positive and negative paths as well.
    cy.get('[data-qa="J10"]').should('have.text', '#REF!'); 
    cy.get('[data-qa="J9"]').should('have.text', ''); 
  });

  it('receives 500', () => {
    cy.intercept(
      {
        method: 'GET',
        url: 'api/cells/',
      },
      {
        statusCode: 500,
        delayMs: 500,
      },
    ).as('getCells');

    cy.visit('/');

    cy.wait('@getCells');

    cy.get('[data-qa="loading ripple"]').should('be.visible');
  });

  it('receives 400', () => {
    cy.intercept(
      {
        method: 'GET',
        url: 'api/cells/',
      },
      {
        statusCode: 400,
        delayMs: 500,
      },
    ).as('getCells');

    cy.visit('/');

    cy.wait('@getCells');

    cy.get('[data-qa="loading ripple"]').should('be.visible');
  });

// P2: See if you can further extend Cypress integration test cases with additional scenarios free of your choice
// new scenario which covers additional 404 status response
it('receives 404', () => {
    cy.intercept(
      {
        method: 'GET',
        url: 'api/cells/',
      },
      {
        statusCode: 404,
        delayMs: 500,
      },
    ).as('getCells');

    cy.visit('/');

    cy.wait('@getCells');

    cy.get('[data-qa="loading ripple"]').should('be.visible');
  });
});
