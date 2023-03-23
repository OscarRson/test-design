import logo from './logo.svg';
import './App.css';
import Navbar from "./layout/Navbar"
import Landlayout from './layout/Landlayout';
import KeyFeaturesLayout from './layout/KeyFeaturesLayout';
import Roadmap from './layout/Roadmap';
import TeamLayout from './layout/TeamLayout';
import SubscribeLayout from './layout/SubscribeLayout';
import Footer from './layout/Footer'

function App() {
  return (
    <div className="App">
        <Navbar/>
        <Landlayout></Landlayout>
        <KeyFeaturesLayout></KeyFeaturesLayout>
        <Roadmap></Roadmap>
        <TeamLayout></TeamLayout>
        <SubscribeLayout></SubscribeLayout>
        <Footer></Footer>
    </div>
  );
}

export default App;
