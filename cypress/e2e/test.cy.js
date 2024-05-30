describe('testing login and logout', () => {
  it('Goes to the site', () => {
    cy.visit('http://localhost:3001/')
    cy.get("form")
    cy.get('input[name="login"]').type("ramil123")
    cy.get('input[name="password"]').type("ramil")
    cy.wait(1000)
    cy.get("#button-login").click()
    cy.wait(1000)
    cy.get("#logout").click()
  })
  
})