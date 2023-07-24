import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import IncomePage from './components/pages/IncomePage';
import ExpensesPage from './components/pages/ExpensesPage';
function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <IncomePage />,

    },
    {
      path: "/income",
      element: <IncomePage />,

    },
    {
      path: "/expenses",
      element: <ExpensesPage />,

    },
  ]);
  return (
    <RouterProvider router={router}>
      
    </RouterProvider>
  );
}

export default App;
