import { useEffect, useState, VFC } from "react";
import { PokeImg } from "@components/atoms/PokeImg";

export type Props = {
	no: number;
};

export const EnhancedPokeImg: VFC<Props> = ({ no }) => {
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setLoading(true);
	}, [no]);
	const imageLoaded = () => {
		setLoading(false);
	};

	let url = "";

	if (no > 0 && no < 650)
		url = `https://www.cpokemon.com/pokes/animated/ds/${no}.gif`;
	else if (no > 649 && no < 793)
		url = `https://www.cpokemon.com/pokes/animated/3ds/${no}.gif`;
	else url = `https://www.cpokemon.com/pokes/home/${no}.png`;

	return <PokeImg {...{ no, url, loading, imageLoaded }} />;
};
