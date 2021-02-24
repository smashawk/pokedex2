import { VFC } from "react";
import { normalizedPokeDataType } from "@store/getPokeData/reducers";
import { descType } from "@utils/createDescArray";
import { EnhancedIconListArea } from "@containers/organisms/searchType/IconListArea";
import { SimpleDataCard } from "@components/molecules/SimpleDataCard";
import { createStyles, makeStyles, Grid } from "@material-ui/core";
import { theme } from "@styles/theme";

const useStyles = makeStyles(() =>
	createStyles({
		gridRoot: {
			marginTop: 31
		},
		iconList: {
			height: 460,
			borderRadius: 20
		},
		dataCard: {
			height: 460,
			marginLeft: theme.spacing(8)
		}
	})
);

type Props = {
	pokeData: normalizedPokeDataType;
	DescArray: descType[];
};

export const OutputArea: VFC<Props> = ({ pokeData, DescArray }) => {
	const classes = useStyles();

	return (
		<Grid container classes={{ root: classes.gridRoot }}>
			<Grid item xs classes={{ item: classes.iconList }}>
				<EnhancedIconListArea />
			</Grid>
			<Grid item xs classes={{ item: classes.dataCard }}>
				<SimpleDataCard {...{ pokeData, DescArray }} />
			</Grid>
		</Grid>
	);
};
