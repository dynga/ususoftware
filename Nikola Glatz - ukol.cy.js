describe('Wikipedia search', () => {
  it('tests the Wikipedia search function', () => {
    cy.visit('https://en.wikipedia.org/wiki/Main_Page')

    cy.get('.vector-search-box-form')
      .type('Arnold Schwarzenegger')
      .submit()

    cy.url().should('include', 'wikipedia.org')
    cy.url().should('include', 'Arnold_Schwarzenegger')

    cy.contains('Personal life')

    cy.contains('Deutsch').click()
    cy.url().should('include', 'Arnold_Schwarzenegger')

    cy.contains('Español').click()
    cy.url().should('include', 'Arnold_Schwarzenegger')

    cy.contains('English').click()
    cy.url().should('include', 'Arnold_Schwarzenegger')

    cy.contains('Download as PDF').click()
    cy.url().should('include', 'DownloadAsPdf')
  })
})