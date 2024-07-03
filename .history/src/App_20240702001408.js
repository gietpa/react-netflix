import { Outlet, Routes, Route } from "react-router-dom";
import "./App.css";
import requests from "./api/request";
import Banner from "./components/Banner";
import Nav from "./components/Nav";
import Row from "./components/Row";
import Footer from "./components/Footer";
import MainPage from "./pages/MainPage";

const Layout = () => {
  return (
    <div>
      <Nav />
      <Outlet />
      <Footer />
    </div>
  );
};

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path=":movieId" index element={<DetailPage />} />
          <Route index element={<MainPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
