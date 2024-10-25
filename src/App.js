import NavBar from "./components/navbar/NavBar";

import GetMeme from "./components/meme/GetMeme";
import styled from "styled-components";
import { devices } from "./utils/constantes";

const ContainerApp = styled.div`
  &.App {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
`;

const ContainerMemes = styled.div`
margin-top: 10rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const App = () => {
  return (
    <ContainerApp className="App">
      <NavBar />
      <ContainerMemes className="container-memes">
        <GetMeme />
      </ContainerMemes>
    </ContainerApp>
  );
};

export default App;
