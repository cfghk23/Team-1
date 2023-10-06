import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Analytics from "./analytics";
import Course from "./course";
import Leaderboard from "./leaderboard";
import CourseCatalog from "./pages/courseCatalog.js";
// import Layout from "./pages/Layout";
import Login from "./login";
import Classes from "./pages/classes";
// import Blogs from "./pages/Blogs";
// import Contact from "./pages/Contact";
// import NoPage from "./pages/NoPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Course />}> */}
        <Route path="/" element={<Login />} />
        <Route path="/course" element={<Course />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/boardsForTeaching" element={<CourseCatalog />} />
        <Route path="/classes" element={<Classes />} />
        {/* <Route path="contact" element={<Contact />} /> */}
        {/* <Route path="*" element={<NoPage />} /> */}
        {/* </Route> */}
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
