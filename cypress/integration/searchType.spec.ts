describe("searchType", () => {
	const baseUrl = Cypress.env("baseUrl");

	it("Can go to searchType", () => {
		cy.visit(baseUrl);

		cy.get("[data-testid=menu-2]").click();
		cy.location("pathname").should("eq", "/type");
	});
});
