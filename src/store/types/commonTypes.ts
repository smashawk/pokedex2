export type pokeData = {
	no: number;
	name: string;
	form: string;
	isMegaEvolution: boolean;
	evolutions: number[];
	types: string[];
	abilities: string[];
	hiddenAbilities: string[];
	stats: {
		hp: number;
		attack: number;
		defence: number;
		spAttack: number;
		spDefence: number;
		speed: number;
	};
};

export type userInfo = {
	user_id: string;
	user_name: string;
	nickname: string;
	mail: string;
	department_id: string;
	department_name: string;
	department_division_name: string;
	photo_url: string;
};
