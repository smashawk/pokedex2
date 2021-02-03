const resetSelectOption = (): void => {
	const typeSelector1: HTMLSelectElement = document.getElementById(
		"typeSelector1"
	) as HTMLSelectElement;
	const typeSelector2: HTMLSelectElement = document.getElementById(
		"typeSelector2"
	) as HTMLSelectElement;

	typeSelector1.value = "-";
	typeSelector2.value = "-";
};

export default resetSelectOption;
