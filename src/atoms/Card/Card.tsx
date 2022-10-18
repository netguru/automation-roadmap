import React from "react";
import { Card } from "./Card.styled";

type CardProps = {
  children: React.ReactNode;
};
const CategoryCard: React.FC<CardProps> = ({ children }) => {
  return <Card>{children}</Card>;
};

export default CategoryCard;
