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

    it("Can interact wth search", () => {});

    it("Sign in", () => {});

    it("Logout", () => {});

    // access products from browsing history
  });

  // cy.get(".recommended__items__row").within(() => {
  //   cy.get(".recommended__items-title")
  //     .contains(/Get yourself a little something/i)
  //     .next()
  //     .children()
  //     .should("have.length", 6);
  // });

  // describe("User can ", () => {
  //   it("see their Browsing history", () => {
  //     cy.get(".browsering__items__row").within(() => {
  //       cy
  //         .contains(/Browsing History/i)
  //         .next()
  //         .children()
  //         .should("have.length", 6)
  //         .children()[0];
  //     });
  //   });

  //   it("see their Recommended deals", () => {
  //     //Recommended deals for you

  //     cy.get(".recommended__items__row").within(() => {
  //       cy.contains(/Recommended deals for you/i)
  //         .next()
  //         .children()
  //         .should("have.length", 6)
  //         .next();
  //     });
  //   });

  // });
});

describe("Homepage navigation", () => {
  //     cy.contains("").click();
  //cy.url().should("include", "//");
  // orders
  // login
  // checkout
  // search
});
