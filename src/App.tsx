import "./App.css";
import { RouterProvider } from "react-router";
import { getRoutes } from "./route";

function App() {
  return <RouterProvider router={getRoutes()} />;
}

export default App;
