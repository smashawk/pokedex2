import { MouseEvent, VFC } from "react";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import classNames from "classnames";

const useStyles = makeStyles(() =>
	createStyles({
		pokeIcon: {
			width: 60,
			height: 45,
			margin: 0,
			padding: 8,
			cursor: "pointer",
			filter: "drop-shadow(2px 4px 6px black)",
			"&:hover": {
				padding: 0
			},
			"&:focus": {
				outline: "none"
			}
		},
		onclick: {
			padding: 0,
			backgroundColor: "#FFF",
			borderRadius: "50%"
		}
	})
);

type OwnProps = {
	item: { name: { ja: string; en: string }; no: number };
	pokeId: number;
	onClick: (event: MouseEvent<HTMLInputElement>) => void;
};

type Props = OwnProps;

export const PokeIconList: VFC<Props> = ({ item, pokeId, onClick }) => {
	const classes = useStyles();
	const id = String(item.no);
	return (
		<input
			type="image"
			alt={item.name.ja}
			src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/icons/${item.no}.png`}
			value={id}
			name={id}
			className={classNames(
				classes.pokeIcon,
				item.no === pokeId && classes.onclick
			)}
			onClick={onClick}
		/>
	);
};
