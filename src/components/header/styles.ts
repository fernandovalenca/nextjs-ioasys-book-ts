import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  p {
    margin-right: 1rem;
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

  @media (max-width: 599px) {
    p {
      visibility: hidden;
    }
  }
`;
