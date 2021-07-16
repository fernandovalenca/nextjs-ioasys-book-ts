import styled from "styled-components";

export const HomeContainer = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  align-items: center;

  padding: 1rem;

  background-image: url("assets/images/BackgroundImageLogin.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

export const HomeWrapper = styled.div`
  width: 100%;

  h1 {
    margin-bottom: 3.125rem;

    font-family: ${(props) => props.theme.font.fontFamily};
    font-size: 2.25rem;

    span {
      font-weight: ${(props) => props.theme.font.regular};
      font-size: 1.75rem;
    }
  }

  form {
    display: grid;
    gap: 1rem;

    width: 100%;
  }

  @media (min-width: 599px) {
    width: 23rem;
    margin-left: 7.1875rem;
  }
`;
