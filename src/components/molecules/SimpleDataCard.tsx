import { VFC } from "react";
import { normalizedPokeDataType } from "@store/getPokeData/reducers";
import { descType } from "@utils/createDescArray";
import { PokeImg } from "@components/atoms/PokeImg";
import { DescriptionList } from "@components/atoms/DescriptionList";
import { createStyles, makeStyles, Paper } from "@material-ui/core";

const useStyles = makeStyles(() =>
	createStyles({
		paper: {
			height: 460,
			margin: "auto",
			padding: "20px 0",
			backgroundImage: `url(${process.env.PUBLIC_URL}/images/bg_black.png)`,
			backgroundRepeat: "repeat"
		}
	})
);

export type Props = {
	pokeData: normalizedPokeDataType;
	DescArray: descType[];
};

export const SimpleDataCard: VFC<Props> = ({ pokeData, DescArray }) => {
	const classes = useStyles();

	return (
		<Paper className={classes.paper}>
			{pokeData.name && (
				<>
					<PokeImg no={pokeData.id} />
					<DescriptionList data={DescArray} />
				</>
			)}
		</Paper>
	);
};
