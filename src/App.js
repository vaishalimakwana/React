import './App.css';
import Accordion from './components/accordion/index5';
import ImageSlider from './components/image-slider';
import RandomColor from './components/randomcolor';
import StarRating from './components/rating';

function App() {
  return (
    <div className="App">
      <RandomColor />
      <Accordion />
      <StarRating noOfStars={10} />
      <ImageSlider
        url={'https://picsum.photos/v2/list'}
        page={'1'}
        limit={'10'}
      />
    </div>
  );
}

export default App;
