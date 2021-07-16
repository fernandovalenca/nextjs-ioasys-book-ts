import styled from "styled-components";

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;

  position: relative;

  background: rgba(0, 0, 0, 0.32);
  border-radius: 0.25rem;
  padding: 0.5rem 0.8125rem;

  margin-bottom: 0.25rem;

  label {
    color: ${(props) => props.theme.colors.white};
    opacity: 0.5;

    margin-bottom: 0.25rem;

    font-family: ${(props) => props.theme.font.fontFamily};
    font-weight: ${(props) => props.theme.font.regular};
    font-size: 0.75rem;
  }

  input {
    width: 70%;

    font-family: ${(props) => props.theme.font.fontFamily};
    font-weight: ${(props) => props.theme.font.regular};
    color: ${(props) => props.theme.colors.white};

    background-color: transparent;
  }
`;
