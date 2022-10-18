import React from "react";
import { ButtonVariants } from "atoms/Button/types";
import { Colors } from "styles/types";
import { StyledTag } from "./Tag.styled";

interface TagProps {
  variant?: ButtonVariants;
  color?: Colors;
  content: string;
}

const Tag: React.FC<TagProps> = ({ content, variant = "primary", color = "primary" }) => (
  <StyledTag variant={variant} color={color}>
    {content}
  </StyledTag>
);

export default Tag;
