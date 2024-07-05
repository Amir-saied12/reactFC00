import React from "react";
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import Layout from './Components/Layout/Layout'
import Home from "./Components/Home/Home";
import './app.css';
import Shop from "./Components/Shop/Shop";
import Shop2 from "./Components/Shop/Shop2";
import About from "./Components/About/About";
import Order from "./Components/Order/Order";
import Contact from "./Components/Contact/Contact";

export default function App() {
  let router = createBrowserRouter([
    {path:'',element:<Layout />,children:[
      {path:'/',element:<Home />},
      {path:'shop',element:<Shop />},
      {path:'shop2',element:<Shop2 />},
      {path:'about',element:<About />},
      {path:'order',element:<Order />},
      {path:'contact',element:<Contact />}
    ]}
  ])
  return <RouterProvider router={router}></RouterProvider>
}