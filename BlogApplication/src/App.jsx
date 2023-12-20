import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
// import "./App.css";
import RootLayout from "./RootLayout";

import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import { login, logout } from "./store/authSlice";
import authService from "./Appwrite/authService";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout></RootLayout>}></Route>
    )
  );

  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userDetails) => {
        if (userDetails) dispatch(login(userDetails));
        else dispatch(logout());
      })
      .catch((err) => console.log("got some issue:  ", err))
      .finally(() => setLoading(false));
  }, []);

  return !loading?(
    <>
      <div className="min-h-screen flex flex-wrap content-between bg-gray-400">
        <div className="w-full block">
          <RouterProvider router={router}></RouterProvider>
        </div>
      </div>
    </> 
  ):null;
}

export default App;
