import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/homepage";
import StartPage from "./pages/startpage"
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/start" element={<StartPage />}></Route>
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
