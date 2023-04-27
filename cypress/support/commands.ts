Cypress.Commands.add('getByData', (selector) => {
   if (selector.startsWith('^')) {
      return cy.get(`[data-label^="${selector.replace('^', '')}"]`)
   }
   return cy.get(`[data-label="${selector}"]`)
})
