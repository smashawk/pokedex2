import { VFC } from "react";
import { createStyles, makeStyles, Box } from "@material-ui/core";
import classNames from "classnames";

const useStyles = makeStyles(() =>
	createStyles({
		pokeImg: {
			width: 100,
			height: 100,
			margin: "auto",
			backgroundSize: "contain",
			backgroundPosition: "center",
			backgroundRepeat: "no-repeat",
			filter: "drop-shadow(2px 4px 6px black)"
		},
		pokeImgHome: (no) => ({
			backgroundImage: `url(https://www.cpokemon.com/pokes/home/${no}.png)`
		}),
		pokeImgDotGif: (no) => ({
			backgroundImage: `url(https://www.cpokemon.com/pokes/animated/ds/${no}.gif)`
		}),
		pokeImgAnimeGif: (no) => ({
			backgroundImage: `url(https://www.cpokemon.com/pokes/animated/3ds/${no}.gif)`
		})
	})
);

export type Props = {
	no: number;
};

export const PokeImg: VFC<Props> = ({ no }) => {
	const classes = useStyles(no);

	return (
		<>
			{no > 0 && no < 650 && (
				<Box className={classNames(classes.pokeImg, classes.pokeImgDotGif)} />
			)}
			{no > 649 && no < 793 && (
				<Box className={classNames(classes.pokeImg, classes.pokeImgAnimeGif)} />
			)}
			{no > 792 && (
				<Box className={`${classes.pokeImg} ${classes.pokeImgHome}`} />
			)}
		</>
	);
};
