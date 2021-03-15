import { VFC } from "react";
import { NormalizedPokeDataType } from "@store/getPokeData/reducers";
import { DescType } from "@utils/createDescArray";
import { DescriptionList } from "@components/atoms/DescriptionList";
import { EnhancedPokeImg } from "@containers/atoms/PokeImg";
import { createStyles, makeStyles, Paper } from "@material-ui/core";

const useStyles = makeStyles(() =>
	createStyles({
		paper: {
			height: "100%",
			margin: "auto",
			padding: "20px 32px",
			backgroundImage: `url(${process.env.PUBLIC_URL}/images/brickwall.png)`,
			backgroundRepeat: "repeat"
		}
	})
);

export type Props = {
	pokeData: NormalizedPokeDataType;
	DescArray: DescType[];
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
