import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Favorites from "./Pages/Favorites";
import Psychologists from "./Pages/Psychologists";
import Layout from "./components/Layout/Layout";

function App() {
  return (
    
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="psychologists" element={<Psychologists />} />
          <Route path="favorites" element={<Favorites />} />
        </Route>

        <Route path="*" element={<div>NF</div>} />
      </Routes>
   
  );
}

export default App;
