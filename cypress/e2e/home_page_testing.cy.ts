describe('Testing clickable element in Home Page with different screen sizes', () => {
   context('Desktop testing', () => {
      beforeEach('Desktop resolution', () => {
         cy.visit('/')
      })
      it('Clicking all clickable elements in home page (desktop)', () => {
         cy.get('[data-label="logo"]').should('exist').and('have.text', 'Logo')

         cy.get('[data-label="instagram"]').should('exist')
         cy.get('[data-label="twitter"]').should('exist')
         cy.get('[data-label="linkedin"]').should('exist')
         cy.get('[data-label="github"]').should('exist')
         cy.get('[data-label="info"]').should('exist').and('have.text', 'Info • ')
         cy.get('[data-label="terms-of-use"]').should('exist').and('have.text', 'Terms of Use • ')
         cy.get('[data-label="privacy-police"]').should('exist').and('have.text', 'Privacy Policy')

         cy.get('[data-label^="language-flag-"]').click()
         cy.get('[data-label^="menu-flag-fr"]').click()
         cy.get('[data-label="menu-link-portfolio"]')
            .should('exist')
            .and('have.text', 'Portefeuille')
         cy.get('[data-label="menu-link-contact"]').should('exist').and('have.text', 'Contact')
         cy.get('[data-label^="language-flag-"]').click()
         cy.get('[data-label^="menu-flag-en"]').click()
         cy.get('[data-label="menu-link-portfolio"]').should('exist').and('have.text', 'Portfolio')
         cy.get('[data-label="menu-link-contact"]').should('exist').and('have.text', 'Contact')
         cy.get('[data-label^="language-flag-"]').click()
         cy.get('[data-label^="menu-flag-pt"]').click()
         cy.get('[data-label="menu-link-portfolio"]').should('exist').and('have.text', 'Portfólio')
         cy.get('[data-label="menu-link-contact"]').should('exist').and('have.text', 'Contato')
      })
   })

   context('Mobile testing', () => {
      beforeEach('Mobile resolution', () => {
         cy.viewport('iphone-xr')
         cy.visit('/')
      })
      it('Clicking all clickable elements in home page (mobile)', () => {
         cy.get('[data-label="logo"]').should('exist').and('have.text', 'Logo')

         cy.get('[data-label="instagram"]').should('exist')
         cy.get('[data-label="twitter"]').should('exist')
         cy.get('[data-label="linkedin"]').should('exist')
         cy.get('[data-label="github"]').should('exist')
         cy.get('[data-label="info"]').should('exist').and('have.text', 'Info • ')
         cy.get('[data-label="terms-of-use"]').should('exist').and('have.text', 'Terms of Use • ')
         cy.get('[data-label="privacy-police"]').should('exist').and('have.text', 'Privacy Policy')

         cy.get('[data-label^="language-flag-"]').click()
         cy.get('[data-label^="menu-flag-fr"]').click()
         cy.get('[data-label="menu-burger"]').click()
         cy.get('[data-label="menu-link-portfolio"]')
            .should('exist')
            .and('have.text', 'Portefeuille')
         cy.get('[data-label="menu-link-contact"]').should('exist').and('have.text', 'Contact')
         cy.get('[data-label="menu-burger"]').click()
         cy.get('[data-label^="language-flag-"]').click()
         cy.get('[data-label^="menu-flag-en"]').click()
         cy.get('[data-label="menu-burger"]').click()
         cy.get('[data-label="menu-link-portfolio"]').should('exist').and('have.text', 'Portfolio')
         cy.get('[data-label="menu-link-contact"]').should('exist').and('have.text', 'Contact')
         cy.get('[data-label="menu-burger"]').click()
         cy.get('[data-label^="language-flag-"]').click()
         cy.get('[data-label^="menu-flag-pt"]').click()
         cy.get('[data-label="menu-burger"]').click()
         cy.get('[data-label="menu-link-portfolio"]').should('exist').and('have.text', 'Portfólio')
         cy.get('[data-label="menu-link-contact"]').should('exist').and('have.text', 'Contato')
         cy.get('[data-label="menu-burger"]').click()
      })
   })
})
