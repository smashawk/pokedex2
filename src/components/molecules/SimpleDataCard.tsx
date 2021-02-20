import { VFC } from "react";
import { normalizedPokeDataType } from "@store/common/getPokeData/reducers";
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

type dataObject = {
	term: string;
	description: string | number;
};

type StateProps = {
	pokeData: normalizedPokeDataType;
	dataArray: dataObject[];
};

type Props = StateProps;

export const SimpleDataCard: VFC<Props> = ({ pokeData, dataArray }) => {
	const classes = useStyles();

	return (
		<Paper className={classes.paper}>
			{pokeData.name && (
				<>
					<PokeImg no={pokeData.id} />
					<DescriptionList data={dataArray} />
				</>
			)}
		</Paper>
	);
};
