import { FiLogOut } from "react-icons/fi";

import { Logo } from "components";
import { Container, Profile } from "./styles";

export const Header = () => {
  return (
    <Container>
      <Logo logoColor="black" />

      <Profile>
        <p>
          Bem vindo, <span>Fernando!</span>
        </p>

        <a href="#">
          <FiLogOut size={16} />
        </a>
      </Profile>
    </Container>
  );
};
