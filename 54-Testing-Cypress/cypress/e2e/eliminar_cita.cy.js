/// <reference types="cypress"/>

describe('Testing de eliminar una cita', () => {
    it('Eliminar una cita', () => {
        cy.visit('http://127.0.0.1:5500/index.html');

        //Crear cita
        cy.get('[data-cy="mascota-input"]').type('Hunter');

        cy.get('[data-cy="propietario-input"]').type('Fernando Joachin');

        cy.get('[data-cy="telefono-input"]').type('1234567890');

        cy.get('[data-cy="fecha-input"]').type('2024-03-23');

        cy.get('[data-cy="hora-input"]').type('20:30');

        cy.get('[data-cy="sintomas-textarea"]').type('Fiebre');

        cy.get('[data-cy="submit-cita"]').click();

        cy.get('[data-cy="citas-heading"]').invoke('text').should('equal', 'Administra tus Citas');

        cy.get('[data-cy="alerta"]').invoke('text').should('equal', 'Se agregó correctamente');

        cy.get('[data-cy="alerta"]').should('have.class', 'alert-success');


        //Eliminar cita
        cy.get('[data-cy="btn-eliminar"]').click();
        cy.get('[data-cy="citas-heading"]').invoke('text').should('equal', 'No hay Citas, comienza creando una');
        cy.screenshot();
    });
});