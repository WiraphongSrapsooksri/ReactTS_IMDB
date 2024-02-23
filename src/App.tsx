import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/Home";
import MoviePage from "./pages/Movie";

function App() {
  const routers = createBrowserRouter([
    { path: "/", element: <HomePage /> },
    { path: "/movie/:name", element: <MoviePage /> },
  ]);
  return (
    <>
      <RouterProvider router={routers} />
    </>
  );
}

export default App;
