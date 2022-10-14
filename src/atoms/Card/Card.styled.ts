import styled from "styled-components";
import { colorsPalette } from "styles";

export const Card = styled.div`
  background: ${colorsPalette.gray[100]};
  box-shadow: 0px 165px 66px rgba(18, 18, 18, 0.01), 0px 93px 56px rgba(18, 18, 18, 0.02),
    0px 41px 41px rgba(18, 18, 18, 0.03), 0px 10px 23px rgba(18, 18, 18, 0.04),
    0px 0px 0px rgba(18, 18, 18, 0.04);
  border-radius: 8px;
`;
