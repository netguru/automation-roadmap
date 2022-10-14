import styled, { css } from "styled-components";
import { colorsPalette } from "styles";
import { Colors } from "styles/types";
import { ButtonStyles } from "./types";

export const primaryMixin = (color: Colors, hoverStyles: boolean = true) => css`
  background-color: ${colorsPalette[color][500]};
  color: white;
  border: none;
  ${hoverStyles &&
  css`
    &:hover {
      background-color: ${colorsPalette[color][700]};
    }
  `}
`;

export const secondaryMixin = (color: Colors, hoverStyles: boolean = true) => css`
  background-color: white;
  color: ${colorsPalette[color][500]};
  border: 1px solid ${colorsPalette[color][500]};
  ${hoverStyles &&
  css`
    &:hover {
      border-color: ${colorsPalette[color][700]};
      color: ${colorsPalette[color][700]};
    }
  `}
`;

export const StyledButton = styled.button<Required<ButtonStyles>>`
  border-radius: 8px;
  padding: 0.9rem 1.2rem;
  font-style: normal;
  font-weight: 700;

  &:hover {
    cursor: pointer;
  }

  ${({ variant, color }) => (variant === "primary" ? primaryMixin(color) : secondaryMixin(color))}

  &:disabled {
    opacity: 0.8;
    cursor: not-allowed;
  }
`;
