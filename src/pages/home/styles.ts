import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: auto;

  padding: 2.5rem 1rem 1rem;

  display: flex;
  justify-content: center;
  flex-direction: column;

  background-image: url("/assets/images/BackgroundImageHome.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  main {
    display: grid;
    flex-direction: column;

    gap: 1rem;

    margin-top: 2.5rem;

    @media (min-width: 600px) {
      grid-template-columns: 1fr 1fr;
    }

    @media (min-width: 1000px) {
      grid-template-columns: 1fr 1fr 1fr;
    }

    @media (min-width: 1300px) {
      grid-template-columns: 1fr 1fr 1fr 1fr;
    }
  }

  @media (min-width: 1300px) {
    padding: 2.5rem 7.1875rem 5.5rem;
    height: 100vh;
  }
`;
