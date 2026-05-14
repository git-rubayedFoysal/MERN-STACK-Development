import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import {
  createBrowserRouter,
  // createRoutesFromElements,
  // Route,
  RouterProvider,
} from "react-router";
import {
  About,
  Contact,
  Home,
  User,
  GitHub,
  githubInfoLoader,
  Error,
  RedirectPage,
} from "./components/";

// Best Practice
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "user/:id",
        element: <User />,
      },
      {
        path: "github",
        element: <GitHub />,
        loader: () => githubInfoLoader(),
      },
      {
        path: "home",
        element: <RedirectPage />,
      },
    ],
  },
  {
    path: "*",
    element: <Error />,
  },
]);

// v6.4 style
// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<App />}>
//       <Route path="" element={<Home />} />
//       <Route path="about" element={<About />} />
//       <Route path="contact" element={<Contact />} />
//       <Route path="user/:id" element={<User />} />
//       <Route
//         path="github"
//         element={<GitHub />}
//         loader={() => {
//           githubInfoLoader();
//         }}
//       />
//     </Route>,
//   ),
// );

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
