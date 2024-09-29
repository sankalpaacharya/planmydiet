import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/homepage";
import StartPage from "./pages/startpage";
import PlanPage from "./pages/planpage";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<HomePage />}></Route>
          <Route path="/" element={<StartPage />}></Route>
          <Route path="/plan/:id" element={<PlanPage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;