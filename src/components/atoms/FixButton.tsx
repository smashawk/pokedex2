import { VFC } from "react";
import { Button, ButtonProps } from "@material-ui/core";

export type Props = {
	text: string;
	color?: ButtonProps["color"];
	variant?: ButtonProps["variant"];
	onClick: () => void;
	testid?: string;
};

export const FixButton: VFC<Props> = ({
	color,
	text,
	variant,
	onClick,
	testid
}) => {
	return (
		<Button {...{ color, variant, onClick }} data-testid={testid}>
			{text}
		</Button>
	);
};
