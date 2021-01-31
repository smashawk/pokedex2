import { Dispatch } from "react";
import { decidePoke } from "@store/searchPoke/decidePoke/actions";
import { OptionType } from "@store/searchPoke/decidePoke/types";

// anyの許容：https://github.com/DefinitelyTyped/DefinitelyTyped/issues/9611
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const decidePokeDispatcher = (dispatch: Dispatch<any>) => (
	no: number,
	option: OptionType
): void => {
	dispatch(decidePoke(no, option));
};
