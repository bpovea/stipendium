import HeaderSection from './components/HeaderSection'
import WhySection from './components/WhySection'
import BodySection from './components/BodySection'
import BottomSection from './components/BottomSection'
import './App.css';

function App() {
  return (
    <div className="App">
      <HeaderSection />
      <hr/>
      <WhySection />
      <hr/>
      <BodySection />
      <hr/>
      <BottomSection />
    </div>
  );
}

export default App;
