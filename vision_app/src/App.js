import styled from "styled-components";
import Navbar from "./components/Navbar";
import Playground from "./components/Playground";


const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: grey;
`;

function App() {
  return (
    <AppContainer>
      <Navbar />
      <Playground />

        
    </AppContainer>
  );
}

export default App;
