import { Content, Details, Overlay } from "./styles";

export const Modal = () => {
  return (
    <Overlay>
      <Content>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTe4g0U6dS1XgAlR0AmyqGa3Dj6hPnCShvLDA&usqp=CAU"
          alt="Capa do livro"
        />
        <h1>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Exercitationem, iusto! Fugit, dolores iure aliquid enim nisi
          consectetur officia, maiores qui eveniet fuga beatae vel similique
          debitis id perspicis.
        </h1>

        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus vel
          ullam ab ad officia enim porro ut quo ea fugit! Neque deleniti
          inventore quo nulla vitae illum magni dicta. Animi?
        </p>

        <Details>
          <h2>INFORMAÇÕES</h2>
          <div>
            <div>
              <p>Páginas</p>
              <p>Editora</p>
              <p>Publicação</p>
              <p>Idioma</p>
              <p>Título Original</p>
              <p>ISBN-10</p>
              <p>ISBN-13</p>
            </div>
            <div>
              <span>Páginas</span>
              <span>Editora</span>
              <span>Publicação</span>
              <span>Idioma</span>
              <span>Título Original</span>
              <span>ISBN-10</span>
              <span>ISBN-13</span>
            </div>
          </div>
        </Details>

        <section></section>
      </Content>
    </Overlay>
  );
};
