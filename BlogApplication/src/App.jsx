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

import Home from './pages/Home'
import AllPost from './pages/AllPost'
import AddPost from './pages/AddPost'
import EditPost from './pages/EditPost'
import Post from './pages/Post'
import { AuthLayout, Login, Signup } from "./component";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout></RootLayout>}>
        <Route path="/" element={
          <Home></Home>
        }></Route>
        <Route path="/login" element={
          <AuthLayout authentication={false}>
            <Login></Login>
          </AuthLayout>
        }></Route>
        <Route path="/signup" element={
          <AuthLayout authentication={false}>
            <Signup></Signup>
          </AuthLayout>
        }></Route>
        <Route path="/all-posts" element={
          <AuthLayout authentication={true}>
            <AllPost></AllPost>
          </AuthLayout>
        }></Route>
        <Route path="/add-post" element={
          <AuthLayout authentication={true}>
            <AddPost></AddPost>
          </AuthLayout>
        }></Route>
        <Route path="/edit-post/:slug" element={
          <AuthLayout authentication={true}>
            <EditPost></EditPost>
          </AuthLayout>
        }></Route>
        <Route path="/post/:slug" element={
          <AuthLayout authentication={true}>
            <Post></Post>
          </AuthLayout>
        }></Route>
      </Route>
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
      <div className="min-h-screen flex flex-wrap content-between bg-gray-300">
        <div className="w-full block">
          <RouterProvider router={router}></RouterProvider>
        </div>
      </div>
    </> 
  ):null;
}

export default App;
