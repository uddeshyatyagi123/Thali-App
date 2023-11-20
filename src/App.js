import React from 'react'
import Thali from "./Components/Thali.js"
import { Provider } from 'react-redux';
import { store } from './Store/Store.js';
import Checkout from './Components/Checkout.js';
import { createBrowserRouter,RouterProvider} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: '',
    children: [
      {
        path:'',
        element:<Thali/>
      },
      {
        path: "checkout",
        element: <Checkout/>
      },
    ],
  },
]);

function App() {
  return (
    <Provider store={store}>
  <RouterProvider router = {router}/>
    </Provider>
  );
}

export default App;
