import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home/Home/Home";
import Footer from "./pages/Shared/Footer/Footer";
import Header from "./pages/Shared/Header/Header";
import Login from "../src/pages/Login/Login/Login";
import Register from "../src/pages/Login/Register/Register";
import RequireAuth from "../src/pages/RequireAuth/RequireAuth";
import Blog from "./pages/Blog/Blog";
import NotFound from "./pages/Shared/NotFound/NotFound";
import About from "./pages/About/About";
import MyItems from "./pages/MyItems/MyItems";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/myitem"
          element={
            <RequireAuth>
              <MyItems />
            </RequireAuth>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
