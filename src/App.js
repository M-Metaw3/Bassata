
import Nav from "./pages/Navbar";
import Routess from "./Routes/Route";
import { ColorModeScript } from '@chakra-ui/react';
import theme from "./theme";
import'./index.css'
import {
  BrowserRouter as Router,
  Route,
  Outlet,
  Routes
} from "react-router-dom";
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  // Extracts pathname property(key) from an object
  const { pathname } = useLocation();

  // Automatically scrolls to top whenever pathname changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
}
function App() {
  console.log(process.env.REACT_APP_API_KEY)
  return (
    <>
 <ColorModeScript initialColorMode={theme.config.initialColorMode} />
 <ScrollToTop />
    <Routess />
    </>
  );
}

export default App;
