import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import BestSellings from "./pages/BestSellings";
import Layout from "./components/Layout.jsx";

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/best-sellings" element={<BestSellings />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
