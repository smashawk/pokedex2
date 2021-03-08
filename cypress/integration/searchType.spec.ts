describe("searchType", () => {
	const baseUrl = Cypress.env("baseUrl");

	it("Can search a type", () => {
		cy.visit(baseUrl);

		cy.get("[data-testid=menu-2]").click();
		cy.location("pathname").should("eq", "/type");

		cy.get("[data-testid=suggestMultiTextField]").click();
		cy.get("[data-option-index=0]").click();

		cy.get("[data-testid=pokeIconId-16]").should("have.attr", "name", "16");

		cy.get("[data-testid=pokeIconId-16]").click();

		cy.get("[data-testid=descId-16] > :nth-child(2)").should("have.text", "16");
	});

	it("Can search multiType", () => {
		cy.get("[data-testid=suggestMultiTextField]").click();
		cy.get(".MuiAutocomplete-clearIndicator").click();

		cy.get("[data-option-index=10]").click();
		cy.get("[data-testid=suggestMultiTextField]").click();
		cy.get("[data-option-index=11]").click();

		cy.get("[data-testid=pokeIconId-270]").should("have.attr", "name", "270");
		cy.get("[data-testid=pokeIconId-270]").click();
		cy.get("[data-testid=descId-270] > :nth-child(2)").should(
			"have.text",
			"270"
		);

		cy.get("[data-testid=switcher]").click();

		cy.get("[data-testid=pokeIconId-1]").should("have.attr", "name", "1");
		cy.get("[data-testid=pokeIconId-1]").click();
		cy.get("[data-testid=descId-1] > :nth-child(2)").should("have.text", "1");
	});
});
