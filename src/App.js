import './App.css';
import { createBrowserRouter, RouterProvider, redirect } from 'react-router-dom';
import Root from "./routes/Root";
import GlobalStyle from "./globalStyle"
import Home from "./routes/Home";
import Shop from "./routes/Shop";
import { useState } from 'react';
/*import Contact from "./routes/contact"; */

function App() {

  const [cart, setCart] = useState({
    items: [],
    itemsNumb: 0,
  });

  const handleAddToCart = (e, itemsNumb) => {

    setCart(prevCart => {
      if (!prevCart.items.find(item => item.name === e.target.dataset.name)) {
        return ({
          items: [...prevCart.items, {
            name: e.target.dataset.name, 
            img: e.target.dataset.img,
            number: itemsNumb,
          }],
          itemsNumb: prevCart.itemsNumb + itemsNumb,
        })
      } else {
        return ({
          items: prevCart.items.map(item => {
            if (item.name === e.target.dataset.name) {
              return {...item, number: item.number + itemsNumb};
            } else {
              return item;
            }
          }),
          itemsNumb: prevCart.itemsNumb + itemsNumb,
        })
      }
    })
    console.log(e.target.dataset.name)
    console.log(e.target.dataset.img)
    console.log(itemsNumb)
  };

  const router = createBrowserRouter([
    {
      element: <Root itemsNumb={cart.itemsNumb} cart={cart} />,
       children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/shop",
          element: <Shop handleAddToCart={handleAddToCart}/>,
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
