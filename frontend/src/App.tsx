import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/homepage";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
