import { Container } from "./styles";

export const Book = () => {
  return (
    <Container>
      <img
        src="https://www.adobe.com/br/express/create/cover/media_19a7c3bcd464c0a9a955b9a538fe32f888e89c7e1.png?width=2000&format=webply&optimize=medium"
        alt="Capa do livro"
      />
      <div>
        <h2>O Projeto de vida</h2>
        <h3>Jaqueline Braga</h3>
        <p>150 páginas</p>
        <p>Editora Loyola</p>
        <p>Publicado em 2021</p>
      </div>
    </Container>
  );
};
