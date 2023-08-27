import './App.css';
import Slider from './components/Slider.js'
import sliderData from "./data/sliderData.json";

function App() {
  return (
    <div className="App">
      <Slider data={sliderData.slides}/>
    </div>
  );
}

export default App;
