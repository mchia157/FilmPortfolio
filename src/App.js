import logo from './logo.svg'
import './App.css';
import {NavBar} from './components/NavBar';
import {Banner} from './components/Banner';
import {Work} from './components/Work';
import {Projects} from './components/Projects'


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <Work/>
      <Projects/>
    </div>
  );
}

export default App;
