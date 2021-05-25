describe("Accessibility tests", () => {
  beforeEach(() => {
    cy.visit("/").injectAxe();
  });
  it("Has no detectable accessibility violations on load", () => {
    cy.wait(500); // wait for rehydration
    cy.checkA11y();
  });
});

describe("Product page", () => {
  it("User can buy it now", () => {});

  it("User can add the product to the basket", () => {});

  it("User can add it to a list", () => {});

  it("User can see the item title", () => {});

  it("User can see the item description", () => {});

  it("User can see the price", () => {});

  it("User can hover on the cart and see my items", () => {});

  it("User can see my cart total", () => {});

  it("User can sign in and  cart stays the same", () => {});

  it("User can sign out and cart stays the same", () => {});
});
