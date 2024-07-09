import "./App.css";

import Banner from "./components/Banner";
import Section from "./components/Section";
import Footer from "./components/Footer";
import UserListComponent from "./components/Views";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "",
          element: <Banner />,
        },
        {
          path: "about",
          element: <Section />,
        },
        {
          path: "views",
          element: <UserListComponent />,
        },
        {
          path: "contact",
          element: <Footer />,
        },
      ],
    },
  ]);

  return (
    <>
      {/* <Navbar />
      <Banner />
      <Section />
      <Footer />
      <UserListComponent /> */}

      <RouterProvider router={router} />
    </>
  );
}

export default App;
