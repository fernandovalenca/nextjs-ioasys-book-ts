import { LogoContainer } from "./styles";

interface ILogoProps {
  logoColor: "white" | "black";
}

export const Logo = ({ logoColor }: ILogoProps) => {
  return (
    <LogoContainer logoColor={logoColor}>
      <h1>
        ioasys <span>Books</span>
      </h1>
    </LogoContainer>
  );
};
