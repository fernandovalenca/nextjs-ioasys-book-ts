import { Book, Footer, Header, Modal } from "components";
import { Fragment } from "react";
import { Container } from "./styles";

export default function Home() {
  return (
    <Fragment>
      <Container>
        <Header />
        <main>
          <Book />
          <Book />
          <Book />
          <Book />
          <Book />
          <Book />
          <Book />
          <Book />
          <Book />
          <Book />
          <Book />
          <Book />
        </main>
        <Footer />
      </Container>
      <Modal />
    </Fragment>
  );
}
