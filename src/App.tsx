import { Route, Routes } from "react-router-dom";
import "./assets/scss/app.scss";
import Header from "./components/Header";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";
import { Cart } from "./pages/Cart";
import { Item } from "./pages/Item";
import React, { useEffect } from "react";
import { fetchFlowers } from "./slices/flowers/flowersSlice";
import { useAppDispatch } from "./assets/hooks/hooks";

const App: React.FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchFlowers());
  }, []);

  return (
    <>
      <Header />
      <main className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/cart" element={<Cart />} /> */}
          <Route path="/plant/:pageId" element={<Item />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
};

export default App;
