describe("topPage", () => {
	const baseUrl = Cypress.env("baseUrl");

	it("Can go to topPage", () => {
		cy.visit(baseUrl);

		cy.get("[data-testId=menu-0]").click();
		cy.location("pathname").should("eq", "/");
	});
});
