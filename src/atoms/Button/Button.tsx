import React from "react";
import { StyledButton } from "./Button.styled";
import { ButtonStyles } from "./types";

type ButtonProps = ButtonStyles & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ color = "primary", variant = "primary", ...rest }, ref) => (
    <StyledButton color={color} variant={variant} ref={ref} {...rest} />
  )
);

export default Button;
