import styled from "styled-components";

export const ButtonContainer = styled.button`
  position: absolute;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%);

  font-family: ${(props) => props.theme.font.fontFamily};
  font-weight: ${(props) => props.theme.font.medium};
  color: ${(props) => props.theme.colors.secondary};

  padding: 0.5rem 1.25rem;
  border-radius: 2.75rem;
  background-color: ${(props) => props.theme.colors.white};

  transition: filter 0.3s;

  :hover {
    filter: brightness(0.9);
  }
`;
