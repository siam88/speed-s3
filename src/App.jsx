
// import Instruction from "./pages/instruction";
import { Route, Routes,   } from "react-router-dom";
import Share from "./pages/share";
// import GameClose from "./pages/gameClose";
const App = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Share />} />
    </Routes>
  );
};

export default App;
