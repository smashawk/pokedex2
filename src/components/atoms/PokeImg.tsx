import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		pokeImg: {
			width: 100,
			height: 100,
			margin: "auto",
			backgroundSize: "contain",
			backgroundPosition: "center",
			backgroundRepeat: "no-repeat"
		},
		pokeImg1: (no) => ({
			backgroundImage: `url(https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${no}.gif)`
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
};

type Props = OwnProps;

export const PokeImg = ({ no }: Props): JSX.Element => {
	const classes = useStyles(no);

	return (
		<>
			{no < 650 && <Box className={`${classes.pokeImg} ${classes.pokeImg1}`} />}
			{no > 649 && no < 803 && (
				<Box className={`${classes.pokeImg} ${classes.pokeImg2}`} />
			)}
			{/*{no < 803 && <Box className={`${classes.pokeImg} ${classes.pokeImg3}`} />}*/}
		</>
	);
};
