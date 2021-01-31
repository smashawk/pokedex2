import { Dispatch } from "react";
import { decidePoke } from "@store/searchPoke/decidePoke/actions";

// anyの許容：https://github.com/DefinitelyTyped/DefinitelyTyped/issues/9611
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const decidePokeDispatcher = (dispatch: Dispatch<any>) => (
	no: number,
	item: any
): void => {
	dispatch(decidePoke(no, item));
};
