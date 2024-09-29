import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/homepage";
import StartPage from "./pages/startpage";
import PlanPage from "./pages/planpage";
import ViewPlanPage from "./pages/viewplan";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<HomePage />}></Route>
          <Route path="/" element={<StartPage />}></Route>
          <Route path="/plan/:id" element={<PlanPage />}></Route>
          <Route path="/view/:id" element={<ViewPlanPage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
