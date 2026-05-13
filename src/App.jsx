import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ProjectDetails from "./pages/ProjectDetails";
import Blogs from "./pages/Blogs";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <div className="font-sans text-gray-800">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/:slug" element={<ProjectDetails />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}
