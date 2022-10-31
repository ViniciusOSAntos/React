import "./App.css"
import Home from './pages/Home';
import ReactGA from 'react-ga4'

const TRACKING_ID = "G-4Q3QP1PDT1"
ReactGA.initialize(TRACKING_ID, {
  gaOptions: {
    siteSpeedSampleRate: 100,
  }
});
ReactGA.send("pageview")

function App() {
  return (
    <Home/> 
  );
}

export default App;
