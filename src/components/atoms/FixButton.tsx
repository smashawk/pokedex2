import { VFC, ButtonHTMLAttributes } from "react";
import { Button, ButtonProps } from "@material-ui/core";

export type Props = {
	text: string;
	color?: ButtonProps["color"];
	variant?: ButtonProps["variant"];
	type: ButtonHTMLAttributes<HTMLButtonElement>["type"];
	testId?: string;
};

export const FixButton: VFC<Props> = ({
	color,
	text,
	variant,
	type,
	testId
}) => {
	return (
		<Button {...{ color, variant, type }} data-testid={testId}>
			{text}
		</Button>
	);
};
