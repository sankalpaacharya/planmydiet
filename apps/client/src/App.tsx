import { createRouter } from "@tanstack/react-router";
import "./App.css";
import { routeTree } from "./routeTree.gen";
import { RouterProvider } from "@tanstack/react-router";

const router = createRouter({ routeTree });

function App() {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
