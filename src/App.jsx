import { Routes, Route, NavLink } from "react-router-dom";
import Students from "./pages/Students";
import Teachers from "./pages/Teachers";

const App = () => {
  return (
    <>
      <nav className="flex gap-5 p-4 bg-black text-white">
        <NavLink to="/students">Students</NavLink>
        <NavLink to="/teachers">Teachers</NavLink>
      </nav>

      <Routes>
        <Route path="/Students" element={<Students />} />
        <Route path="/Teachers" element={<Teachers />} />
      </Routes>
    </>
  );
};

export default App;
