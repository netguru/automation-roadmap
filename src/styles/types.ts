export const AppColors = ["primary", "beginner", "intermediate", "expert", "gray"] as const;
export type Colors = typeof AppColors[number];

export type ColorScale = Record<number, string>;

export type ColorsPalette = {
  [key in Colors]: ColorScale;
};
