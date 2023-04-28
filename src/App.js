import './App.css';
import { useState, useEffect } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import CartContextProvider from './context/CartContext';
import Root from "./routes/Root";
import Home from "./routes/Home";
import Shop from "./routes/Shop";
/*import Contact from "./routes/contact"; */
import GlobalStyle from "./globalStyle"

function App() {

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResizeWindow = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResizeWindow);
    return () => {
      window.removeEventListener("resize", handleResizeWindow);
    };
  }, []);

  const router = createBrowserRouter([
    {
      element: <Root windowWidth={windowWidth} />,
       children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/shop",
          element: <Shop windowWidth={windowWidth} />,
        },
        /*{
          path: "/shopping-cart/contact",
          element: <Contact />
        }*/
      ],
    },
  ])

  return (
    <CartContextProvider>
      <RouterProvider router={router} />
      <GlobalStyle />
    </CartContextProvider>
  );
}

export default App;
