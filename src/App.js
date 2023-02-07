import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Partners from "./pages/partners/Partners";
import NotFound from "./pages/NotFound";
import Stories from "./pages/stories/Stories";
import StoryDetails from "./pages/StoryDetails/StoryDetails";
import storyOne from "./assets/img/png/storyOne.png";
import storyTwo from "./assets/img/png/storyTwo.png";
import storyThree from "./assets/img/png/storyThree.png";
const storyData = [
  {
    id: 1,
    title: "The first rebranding",
    imgUrl: storyOne,
    date: "2022-08-02T13:32",
  },
  {
    id: 2,
    title: "Team Captains",
    imgUrl: storyTwo,
    date: "2022-08-02T13:32",
  },
  {
    id: 3,
    title: "Coologistics",
    imgUrl: storyThree,
    date: "2022-08-02T13:32",
  },
  {
    id: 4,
    title: "500k",
    imgUrl: storyOne,
    date: "2022-08-02T13:32",
  },
  {
    id: 5,
    title: "1 million",
    imgUrl: storyTwo,
    date: "2022-08-02T13:32",
  },
  {
    id: 6,
    title: "New rebranding",
    imgUrl: storyThree,
    date: "2022-08-02T13:32",
  },
  {
    id: 7,
    title: "Landstar fortune 500",
    imgUrl: storyOne,
    date: "2022-08-02T13:32",
  },
  {
    id: 8,
    title: "Tbilisi Office",
    imgUrl: storyTwo,
    date: "2022-08-02T13:32",
  },
  {
    id: 9,
    title: "Lebanon Office",
    imgUrl: storyThree,
    date: "2022-08-02T13:32",
  },
];
function App() {
  return (
    <Router>
      <Routes>
        <Route path="" element={<Home storyData={storyData} />} />
        <Route path="partners" element={<Partners />} />
        <Route
          path="success-stories"
          element={<Stories storyData={storyData} />}
        />
        <Route
          path="success-stories/:id"
          element={<StoryDetails storyData={storyData} />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
