import styled from "styled-components";

export const Container = styled.footer`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: 1rem;

  p {
    margin: 0 1rem;

    line-height: 1.25rem;
    font-size: 0.75rem;

    span {
      font-weight: ${(props) => props.theme.font.medium};
    }
  }

  a {
    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 0;

    padding: 0.5rem;
    border: 1px solid rgba(51, 51, 51, 0.2);
    border-radius: 50%;

    svg {
      color: ${(props) => props.theme.colors.blackSoft};
    }
  }

  @media (min-width: 1300px) {
    justify-content: flex-end;
  }
`;
