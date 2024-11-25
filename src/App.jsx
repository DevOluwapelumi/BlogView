import { Route, Routes } from "react-router-dom";
import "./App.css";
import "tailwindcss/tailwind.css";
import "./index.css";
import Landing from "./pages/Landing";
import Share from "./pages/Share";
import Spinner from "./pages/Spinner";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Define all routes */}
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/share" element={<Share />} />
        <Route path="/spin" element={<Spinner />} />
        {/* Catch-all route for undefined paths */}
        <Route path="*" element={<div className="text-center mt-8 text-red-500">Page Not Found</div>} />
      </Routes>
    </div>
  );
};

export default App;
