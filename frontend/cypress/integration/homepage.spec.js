describe("Accessibility tests", () => {
  beforeEach(() => {
    cy.visit("/").injectAxe();
  });
  it("Has no detectable accessibility violations on load", () => {
    cy.wait(500); // wait for rehydration
    cy.checkA11y();
  });
});

describe("Site works", () => {
  it("navigate to index", () => {
    cy.visit("/");
  });
});

describe("Homepage", () => {
  it("Has get yourself a little something cards and displays 6 items", () => {
    cy.visit("/");
    cy.wait(500); // wait for rehydration

    cy.get(".recommended__items__row").within(() => {
      cy.get(".recommended__items-title")
        .contains(/Get yourself a little something/i)
        .next()
        .children()
        .should("have.length", 6);
    });
  });

  it("User can see their browsing history", () => {});

  it("User can see their Recommended deals", () => {
    //Recommended deals for you
  });

  it("User can interact wth search", () => {});

  it("User can sign in", () => {});

  it("User can logout", () => {});
  // i can visit browsing history item
});

describe("Homepage navigation", () => {
  //     cy.contains("").click();
  //cy.url().should("include", "//");
  // orders
  // login
  // checkout
  // search
});

