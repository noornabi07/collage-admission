import "./App.css";
import AutoCounter from "./Components/AutoCounter/AutoCounter";
import Banner from "./Components/Banner";
import CollegeCard from "./Components/CollegeCardSection/CollegeCard";
import CollegeGallery from "./Components/CollegeGallery/CollegeGallery";
import LiveClass from "./Components/LiveClass/LiveClass";
import NewsEvent from "./Components/NewsEvent/NewsEvent";
import Testamonial from "./Components/Testamonial";
// import Testamonial from "./Components/Testamonial";

function App() {
  return (
    <>
      <div className="max-w-full">
        <Banner></Banner>
      </div>
      <CollegeCard></CollegeCard>
      <CollegeGallery></CollegeGallery>
      <LiveClass></LiveClass>
      <NewsEvent></NewsEvent>
      <AutoCounter></AutoCounter>
      <Testamonial></Testamonial>
      
    </>
  );
}

export default App;
