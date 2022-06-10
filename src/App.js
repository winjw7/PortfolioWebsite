import './App.css';
import Footer from './components/Footer';
import Socials from './components/Socials';
import AboutMe from './pages/AboutMe';
import ContactMe from './pages/ContactMe';
import FrontPage from './pages/FrontPage';
import WorkExperience from './pages/WorkExperience';

function App() {
  return (
    <div className="App flex col">
      <FrontPage/>
      <AboutMe/>
      <WorkExperience/>
      <ContactMe/>
      <Footer/>
    </div>
  );
}

export default App;
