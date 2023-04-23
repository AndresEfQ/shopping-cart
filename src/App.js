import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import CartContextProvider from './context/CartContext';
import Root from "./routes/Root";
import Home from "./routes/Home";
import Shop from "./routes/Shop";
/*import Contact from "./routes/contact"; */
import GlobalStyle from "./globalStyle"

function App() {

  const router = createBrowserRouter([
    {
      element: <Root />,
       children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/shop",
          element: <Shop />,
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
