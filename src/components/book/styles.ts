import styled from "styled-components";

export const Container = styled.div`
  display: flex;

  width: 100%;
  height: 10rem;

  background-color: ${(props) => props.theme.colors.white};
  box-shadow: 0px 0.375rem 1.5rem rgba(84, 16, 95, 0.13);
  border-radius: 0.25rem;

  padding: 1.1875rem 1rem;

  img {
    width: 5.0625rem;
  }

  > div {
    margin-left: 1rem;

    h2 {
      font-weight: ${(props) => props.theme.font.medium};
      font-size: 0.875rem;
      line-height: 1.25rem;
    }

    h3 {
      font-weight: ${(props) => props.theme.font.regular};
      font-size: 0.75rem;
      line-height: 1.25rem;
      color: ${(props) => props.theme.colors.secondary};
    }

    p {
      font-weight: ${(props) => props.theme.font.regular};
      font-size: 0.75rem;
      line-height: 1.25rem;
      color: ${(props) => props.theme.colors.gray};
    }
  }
`;
