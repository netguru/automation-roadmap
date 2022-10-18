import { Colors } from "styles/types";

export type ButtonVariants = "primary" | "secondary";

export interface ButtonStyles {
  variant?: ButtonVariants;
  color?: Colors;
}
