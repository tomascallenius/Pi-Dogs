import "./App.css";
import Home from "./components/Home/Home";
import Nav from "./components/Nav/Nav";
import Landing from "./components/Landing/Landing";
import Create from "./components/Create/Create";
import Detail from "./components/Detail/Detail";
import Footer from "./components/Footer/Footer";
import { Route, Routes, useLocation } from "react-router-dom";

function App() {
  const { pathname } = useLocation();
  return (
    <div className="App">
      {pathname !== "/" && <Nav />}
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/createDog" element={<Create />} />
      </Routes>
      {pathname !== "/" && <Footer />}
    </div>
  );
}

export default App;
