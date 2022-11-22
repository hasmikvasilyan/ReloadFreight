import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Partners from "./pages/partners/Partners";
import NotFound from "./pages/NotFound";
import Stories from "./pages/stories/Stories";
import StoryDetails from "./pages/StoryDetails/StoryDetails";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="partners" element={<Partners />} />
        <Route path="success-stories" element={<Stories />} />
        <Route path="success-stories/:id" element={<StoryDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
