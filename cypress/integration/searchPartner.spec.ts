describe("searchPartner", () => {
	const baseUrl = Cypress.env("baseUrl");

	it("Can search partner", () => {
		cy.visit(baseUrl);

		cy.get("[data-testid=menu-3]").click();
		cy.location("pathname").should("eq", "/partner");

		cy.get("[data-testid=searchPartner-input]").type("test");
		cy.get("[data-testid=searchPartner-button]").click();

		cy.get("[data-testid=searchPartner-text] > :nth-child(1)").should(
			"have.text",
			"test"
		);
	});
});
