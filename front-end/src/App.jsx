import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
   <AuthProvider>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>Home page</h1>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/posts" element={<h1>Posts</h1>} />
        <Route path="/add-post" element={<h1>Add new post</h1>} />
        <Route path="/posts/:id" element={<h1>Take one post</h1>} />
        <Route path="/profile" element={<h1>Profile</h1>} />
      </Routes>
    </BrowserRouter>
   </AuthProvider>
  );
}

export default App;
