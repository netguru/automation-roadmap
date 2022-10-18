export const size = {
  //Breakpoint with portrait orientation in mind
  tablet: "1023px",
  desktop: "1400px",
};

export const mediaQuery = {
  mobile: `@media screen and (max-width: ${size.tablet})`,
  tablet: `@media screen and (min-width: ${parseInt(size.tablet, 10) + 1}px) and (max-width: ${
    size.desktop
  })`,
  desktop: `@media screen and (min-width: ${size.desktop})`,
};

export type Media = keyof typeof mediaQuery;
