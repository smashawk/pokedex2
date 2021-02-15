import { VFC } from "react";
import { PokedexTemplate } from "@components/templates/pokedexTemplate";
import Typography from "@material-ui/core/Typography";

/**
 * Top Page
 * @constructor
 */
export const Index: VFC = () => {
	return (
		<PokedexTemplate>
			<>
				<Typography variant="h2">使用パッケージ</Typography>
			</>
		</PokedexTemplate>
	);
};
