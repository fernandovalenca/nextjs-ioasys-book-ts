import { ButtonHTMLAttributes, FunctionComponent } from "react";
import { ButtonContainer } from "./styles";

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button: FunctionComponent<IButtonProps> = ({
  children,
  ...rest
}) => {
  return <ButtonContainer {...rest}>{children}</ButtonContainer>;
};
