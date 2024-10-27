import NavBar from "./components/navbar/NavBar";

import GetMeme from "./components/meme/GetMeme";
import styled from "styled-components";
import { devices } from "./utils/constantes";
import Footer from "./components/footer/Footer";
//import { devices } from "./utils/constantes";

const ContainerApp = styled.div`
  &.App {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
`;

const ContainerMemes = styled.div`
  margin-top: 15rem;
  margin-bottom: 10rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media only screen and (${devices.tablet}) {
    margin-top: 4rem;
  }
  @media only screen and (${devices.iphone14}) {
    margin-top: 4rem;
  }
  @media only screen and (${devices.mobileG}) {
    margin-top: 4rem;
  }
  @media only screen and (${devices.mobileM}) {
    margin-top: 3rem;
  }
  @media only screen and (${devices.mobileP}) {
    margin-top: 3rem;
  }
`;

const App = () => {
  return (
    <ContainerApp className="App">
      <NavBar />
      <ContainerMemes className="container-memes">
        <GetMeme />
      </ContainerMemes>
      <Footer />
    </ContainerApp>
  );
};

export default App;
