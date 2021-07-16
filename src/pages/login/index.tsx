import { useForm } from "react-hook-form";

import { Button, Input, Logo } from "components";
import { HomeContainer, HomeWrapper } from "./styles";

const Home = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data: FormData) => console.log(data);

  return (
    <HomeContainer>
      <HomeWrapper>
        <Logo logoColor="white" />
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            title="E-mail"
            type="email"
            required
            {...register("email", { required: true })}
          />
          <Input
            title="Senha"
            type="password"
            required
            {...register("password", { required: true })}
          >
            <Button>Entrar</Button>
          </Input>
        </form>
      </HomeWrapper>
    </HomeContainer>
  );
};

export default Home;
