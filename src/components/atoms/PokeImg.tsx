import classNames from "classnames";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";

const useStyles = makeStyles(() =>
	createStyles({
		pokeImg: {
			width: 100,
			height: 100,
			margin: "auto",
			backgroundSize: "contain",
			backgroundPosition: "center",
			backgroundRepeat: "no-repeat"
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

type OwnProps = {
	no: number;
};

type Props = OwnProps;

export const PokeImg = ({ no }: Props): JSX.Element => {
	const classes = useStyles(no);

	return (
		<>
			{no < 650 && (
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
