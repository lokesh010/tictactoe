describe("Test the Square in Board Component", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("renders correctly", () => {
    cy.get(".animate-slideDown").should("exist");
    cy.contains("Round").should("exist");
    cy.contains("Next Turn").should("exist");
    cy.get(".flex.flex-col.items-center.gap-3").should("exist");
    cy.get('button[aria-label="Reset Board"]').should("exist");
  });

  it("clicking on squares changes value", () => {
    cy.wait(1000); // wait for dom to load the screen
    cy.get('[data-testid="square0"]').first().click();
    cy.get('[data-testid="squareX"]').should("exist");
  });

  it("resets the board correctly", () => {
    cy.get('[data-testid="reset-btn"]').click();
    cy.get('[data-testid="square0"]').should("exist");
  });
});
