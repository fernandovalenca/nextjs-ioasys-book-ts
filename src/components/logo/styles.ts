import styled from "styled-components";

interface ILogoContainer {
  logoColor: "white" | "black";
}

export const LogoContainer = styled.div<ILogoContainer>`
  background-color: transparent;

  h1 {
    font-family: ${(props) => props.theme.font.fontFamily};
    font-size: 2.25rem;

    ${(props) =>
      props.logoColor === "white"
        ? `color: ${props.theme.colors.white};`
        : `color: ${props.theme.colors.blackSoft};`}

    span {
      font-weight: ${(props) => props.theme.font.regular};
      font-size: 1.75rem;
    }
  }
`;
