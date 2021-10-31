describe("Accessibility tests", () => {
  beforeEach(() => {
    cy.visit("/").injectAxe();
  });
  it("Has no detectable accessibility violations on load", () => {
    cy.wait(500); // wait for rehydration
    cy.checkA11y();
  });
});

describe("Order page", () => {
  it("User can see their orders", () => {});
  it("User can see their order total", () => {});
  it("User can see their order items", () => {});

  it("User can buy again", () => {});

  it("User can view a bought item", () => {});

  it("User can see a new order added to items", () => {});

  it("User can see their browsing history, () => {});


});
