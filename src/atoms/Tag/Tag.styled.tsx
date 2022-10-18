import styled from "styled-components";
import { ButtonVariants } from "atoms/Button/types";
import { primaryMixin, secondaryMixin } from "atoms/Button/Button.styled";
import { Colors } from "styles/types";

export const StyledTag = styled.span<{ variant: ButtonVariants; color: Colors }>`
  display: inline;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  padding: 0.3rem 0.6rem;
  font-style: normal;
  font-weight: 700;
  width: fit-content;
  ${({ variant, color }) =>
    variant === "primary" ? primaryMixin(color, false) : secondaryMixin(color, false)}
`;
