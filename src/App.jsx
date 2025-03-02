import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter, Routes } from "react-router";
import { projectRoutes } from "./pages";
import theme from "./theme";
import FooterComponent from './components/footer';
import Header from "./components/header";
import './App.css'

function App() {

  return (
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        <Header />
        <Routes>
          {projectRoutes}
        </Routes>
        <FooterComponent />
      </ChakraProvider>
    </BrowserRouter>
  )
}
export default App
