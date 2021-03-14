import { VFC, ButtonHTMLAttributes } from "react";
import { Button, ButtonProps } from "@material-ui/core";

export type Props = {
	text: string;
	disabled?: boolean;
	id?: string;
	color?: ButtonProps["color"];
	variant?: ButtonProps["variant"];
	type?: ButtonHTMLAttributes<HTMLButtonElement>["type"];
	testId?: string;
	onClick?: () => void;
};

export const FixButton: VFC<Props> = ({
	text,
	disabled,
	id,
	color = "primary",
	variant = "contained",
	type = "submit",
	testId,
	onClick
}) => {
	return (
		<Button
			{...{ id, color, variant, type, onClick, disabled }}
			data-testid={testId}
		>
			{text}
		</Button>
	);
};
