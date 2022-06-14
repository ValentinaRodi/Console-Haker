import styled, { createGlobalStyle } from "styled-components"
import Theme from "./components/Theme"

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background: black;
    font-family: Consolas;
    width: 100%;
    min-height: 100vh;
  }
`

const Flex = styled.div`
  background: black;
  color: red;
  width: 100%;
  padding: 2rem;
  min-height: 100vh;
`

const App = () => (
  <>
    <GlobalStyle />
      <Flex>
        <Theme />
      </Flex>
  </>
)

export default App;
