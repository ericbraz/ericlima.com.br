declare namespace Cypress {
   interface Chainable<Subject = any> {
      getByData(selector: string): Chainable<JQuery>
   }
}
