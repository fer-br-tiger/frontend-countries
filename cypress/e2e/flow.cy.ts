describe('Flujo básico de países', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Busca un país por nombre y navega al detalle', () => {
    cy.get('input[formControlName="search"]')
      .type('Argentina')
      .should('have.value', 'Argentina');

    cy.wait(500); // debounce

    cy.contains('Argentina').should('be.visible');

    cy.contains('Argentina').parent().contains('Ver más').click();

    cy.url().should('include', '/listado/country/ARG');
    cy.contains('Argentina').should('exist');
  });

  it('Agrega y remueve un país de favoritos', () => {
    cy.get('input[formControlName="search"]').type('Chile');
    cy.wait(500);
    cy.contains('Chile').should('be.visible');

    cy.contains('Chile').parent().contains('☆').click(); // agregar

    cy.contains('Chile').parent().contains('★'); // ahora favorito

    cy.contains('Chile').parent().contains('★').click(); // quitar

    cy.contains('Chile').parent().contains('☆');
  });
});
