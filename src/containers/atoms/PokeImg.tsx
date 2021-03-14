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
		url = `${process.env.PUBLIC_URL}/images/dot_gif/${no}.gif`;
	else if (no > 649 && no < 808)
		url = `${process.env.PUBLIC_URL}/images/3ds_gif/${no}.gif`;
	else url = `https://www.cpokemon.com/pokes/home/${no}.png`;

	return <PokeImg {...{ no, url, loading, imageLoaded }} />;
};
