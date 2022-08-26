import "./App.css";

import { Route, Routes } from "react-router-dom";
import Nav from "./Components/Nav";
import Home from "./Routes/Home";
import Blogs from "./Routes/Blogs";

const App = () => {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Home" element={<Home />} />
        <Route path="Blogs" element={<Blogs />} />
      </Routes>
    </>
  );
};

export default App;
