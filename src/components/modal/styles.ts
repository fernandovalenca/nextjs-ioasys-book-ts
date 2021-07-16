import styled from "styled-components";

export const Overlay = styled.div`
  display: block;

  position: fixed;

  padding: 4rem 1rem 1rem;
  z-index: 9999;

  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  overflow: auto;

  background-color: rgba(0, 0, 0, 0.4);
`;

export const Content = styled.div`
  padding: 1.5rem;
  border-radius: 4px;

  background-color: white;

  > img {
    width: 100%;
    margin-bottom: 1.5rem;
  }

  > h1 {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

    font-weight: ${(props) => props.theme.font.medium};
    font-size: 1.75rem;
    line-height: 2.5rem;
  }

  > p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

    font-weight: ${(props) => props.theme.font.regular};
    font-size: 0.75rem;
    line-height: 1.25rem;
    color: ${(props) => props.theme.colors.secondary};

    margin-bottom: 2rem;
  }

  section {
    h2 {
      font-size: 0.75rem;
      font-weight: ${(props) => props.theme.font.medium};
      margin-bottom: 1rem;
    }
  }
`;

export const Details = styled.div`
  > h2 {
    font-size: 0.75rem;
    font-weight: ${(props) => props.theme.font.medium};
    margin-bottom: 1rem;
  }

  > div {
    display: flex;
    justify-content: space-between;

    div {
      p {
        font-size: 0.75rem;
        font-weight: ${(props) => props.theme.font.medium};
      }

      span {
        color: ${(props) => props.theme.colors.gray};
        font-size: 0.75rem;
        display: block;
        text-align: end;
      }
    }
  }
`;
