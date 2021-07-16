import { FunctionComponent, InputHTMLAttributes } from "react";

import { InputContainer } from "./styles";

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  title: string;
}

export const Input: FunctionComponent<IInputProps> = ({
  title,
  children,
  ...rest
}) => {
  return (
    <InputContainer>
      <label>{title}</label>
      <input {...rest} />
      {children}
    </InputContainer>
  );
};
