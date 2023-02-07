import Stats from "./Stats";
import Top from "./Top";
import About from "./About";
import SuccessStory from "./SuccessStory";
import Footer from "./Footer";



function Home({storyData}) {
  return (
    <>
      <Top/>
      <Stats/>
      <About/>
      <SuccessStory storyData={storyData}/>
      <Footer/>
    </>
  );
}

export default Home;
