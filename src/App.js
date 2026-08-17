import './App.css';
import StarField from './assets/StarField';
import AboutMe from './components/aboutme';
import Expertise from './components/expertise';
import Footer from './components/footer';
import Header from './components/header';
import Projects from './components/projects';
import MyWork from './components/work';

function App() {
  return (
    <div className="App">
      <StarField />
      <Header />
      <AboutMe />
      <Expertise />
      <MyWork />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
