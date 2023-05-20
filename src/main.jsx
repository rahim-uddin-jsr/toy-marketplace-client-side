import React from "react";
import "@smastrom/react-rating/style.css";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AuthProvider from "./context/AuthProvider/AuthProvider";

import "./index.css";
import Main from "./Layout/Main/Main";
import AddToys from "./Pages/AddToys/AddToys";
import AllToys from "./Pages/AllToys/AllToys";
import ToyDetails from "./Pages/AllToys/ToyDetails";
import Blogs from "./Pages/Blogs/Blogs";
import ErrorPage from "./Pages/ErrorPage/ErrorPage";
import Home from "./Pages/Home/Home/Home";
import Login from "./Pages/Login/Login";
import MyToys from "./Pages/MyToys/MyToys";
import Register from "./Pages/Register/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "/all-toys",
        element: <AllToys />,
        loader: () =>
          fetch("http://localhost:5000/toys"),
      },
      {
        path: "toy/:id",
        element: <ToyDetails />,
        loader: ({ params }) => fetch(`http://localhost:5000/toy/${params.id}`),
      },
      { path: "/add-toys", element: <AddToys /> },
      { path: "/my-toys", element: <MyToys /> },
      { path: "/blogs", element: <Blogs /> },
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>
);
