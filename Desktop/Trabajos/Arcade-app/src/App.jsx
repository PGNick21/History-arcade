import {Arcade} from "./pages/Arcade"
import { Catalogo } from "./pages/catalogo-arcade"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Routes>
          <Route path="/" element={<Arcade/>} />
          <Route path="/Catalogo" element={<Catalogo />} />
        </Routes>

    </>
  );
}
export default App
