import './App.css';
import { createBrowserRouter, RouterProvider, redirect } from 'react-router-dom';
import Root from "./routes/Root";
import GlobalStyle from "./globalStyle"
import Home from "./routes/Home";
import Shop from "./routes/Shop";
/*import Contact from "./routes/contact"; */

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
    <>
      <RouterProvider router={router} />
      <GlobalStyle />
    </>
  );
}

export default App;
