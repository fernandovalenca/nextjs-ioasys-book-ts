import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

import { Container } from "./styles";

export const Footer = () => {
  return (
    <Container>
      <a href="#">
        <AiOutlineLeft size={16} />
      </a>
      <p>
        Páginas <span>1</span> de <span>100</span>
      </p>
      <a href="#">
        <AiOutlineRight size={16} />
      </a>
    </Container>
  );
};
