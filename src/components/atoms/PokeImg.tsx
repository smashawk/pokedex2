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
		pokeImg0: (no) => ({
			// backgroundImage: `url(https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${no}.gif)`
			backgroundImage: `url(https://www.cpokemon.com/pokes/animated/3ds/${no}.gif)`
		}),
		pokeImg1: (no) => ({
			backgroundImage: `url(https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${no}.gif)`
			// backgroundImage: `url(https://www.cpokemon.com/pokes/animated/3ds/${no}.gif)`
		}),
		pokeImg2: (no) => ({
			backgroundImage: `url(https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/ultra-sun-ultra-moon/${no}.png)`
		})
		// pokeImg3: (no) => ({
		// 	backgroundImage: `url(./images/${no}_0.png)`
		// })
	})
);

type OwnProps = {
	no: number;
	img?: string;
};

type Props = OwnProps;

export const PokeImg = ({ no, img }: Props): JSX.Element => {
	const classes = useStyles(no);

	return img === "animated" ? (
		<Box className={classNames(classes.pokeImg, classes.pokeImg0)} />
	) : (
		<>
			{no < 650 && (
				<Box className={classNames(classes.pokeImg, classes.pokeImg1)} />
			)}
			{no > 649 && no < 803 && (
				<Box className={classNames(classes.pokeImg, classes.pokeImg2)} />
			)}
			{/* {no < 803 && <Box className={`${classes.pokeImg} ${classes.pokeImg3}`} />}*/}
		</>
	);
};
