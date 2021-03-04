import { VFC } from "react";
import { setInputNameState } from "@store/setInputName/reducer";
import { normalizedPokeDataType } from "@store/getPokeData/reducers";
import { normalizedPokeSpeciesType } from "@store/getPokeSpecies/reducers";
import { EnhancedDataCard } from "@containers/molecules/DataCard";
import { Box, Typography, createStyles, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() =>
	createStyles({
		bold: {
			fontWeight: "bold",
			padding: "0 4px"
		}
	})
);

type StateProps = {
	inputName: setInputNameState;
	pokeData: normalizedPokeDataType;
	pokeSpecies: normalizedPokeSpeciesType;
};

type Props = StateProps;

export const OutputArea: VFC<Props> = ({
	inputName,
	pokeData,
	pokeSpecies
}) => {
	const classes = useStyles();
	return (
		<Box mt={10}>
			<EnhancedDataCard pokeData={pokeData} pokeSpecies={pokeSpecies}>
				<Typography variant="subtitle1" data-testId="searchPartner-text">
					<span className={classes.bold}>{inputName.inputName}</span>は
					<span className={classes.bold}>{pokeSpecies.name.ja}</span>
					にきめた！
				</Typography>
			</EnhancedDataCard>
		</Box>
	);
};
