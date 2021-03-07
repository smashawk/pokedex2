import { VFC } from "react";
import { normalizedPokeDataType } from "@store/getPokeData/reducers";
import { descType } from "@utils/createDescArray";
import { DescriptionList } from "@components/atoms/DescriptionList";
import { EnhancedPokeImg } from "@containers/atoms/PokeImg";
import { createStyles, makeStyles, Paper } from "@material-ui/core";

const useStyles = makeStyles(() =>
	createStyles({
		paper: {
			height: 460,
			margin: "auto",
			padding: "20px 32px",
			backgroundImage: `url(${process.env.PUBLIC_URL}/images/brickwall.png)`,
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
					<EnhancedPokeImg no={pokeData.id} />
					<DescriptionList data={DescArray} testId={`descId-${pokeData.id}`} />
				</>
			)}
		</Paper>
	);
};
