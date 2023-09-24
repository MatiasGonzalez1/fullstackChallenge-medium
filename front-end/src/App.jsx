import { Routes, Route } from "react-router-dom";
import {Register, Login, Home, Post, PostForm, Profile} from "./pages/index";
import ProtectedRoute from "./utils/ProtectedRoute";

import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
   <AuthProvider>
        <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />

       <Route element={<ProtectedRoute/>}>
       <Route path="/posts" element={<Post/>} />
        <Route path="/add-post" element={<PostForm/>} />
        <Route path="/posts/:id" element={<PostForm/>} />
        <Route path="/profile" element={<Profile/>} />
       </Route>
      </Routes>
   </AuthProvider>
  );
}

export default App;
