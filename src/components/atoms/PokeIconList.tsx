import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		pokeIcon: (no) => ({
			width: 50,
			height: 50,
			margin: "auto",
			backgroundSize: "auto",
			backgroundPosition: "center",
			backgroundRepeat: "no-repeat",
			backgroundImage: `url(https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/icons/${no}.png)`,
			cursor: "pointer",
			"&:hover": {
				backgroundSize: "contain"
			}
		})
	})
);

type OwnProps = {
	item: any;
	onMouseOver: any;
};

type Props = OwnProps;

export const PokeIconList = ({ item, onMouseOver }: Props): JSX.Element => {
	const classes = useStyles(item.number.no);
	return (
		<li
			id={item.number.no}
			className={classes.pokeIcon}
			onMouseOver={onMouseOver}
			onFocus={onMouseOver}
		/>
	);
};
