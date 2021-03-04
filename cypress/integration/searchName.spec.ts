describe("searchName", () => {
	const baseUrl = Cypress.env("baseUrl");

	it("Can search フシギダネ", () => {
		cy.visit(baseUrl);

		cy.get("[data-testId=menu-1]").click();
		cy.location("pathname").should("eq", "/pokemon");

		cy.get("[data-testId=suggestTextField]").click();
		cy.get("[data-option-index=0]").click();

		cy.get("[data-testId=descId-1] > :nth-child(2)").should("have.text", "1");
	});
});
