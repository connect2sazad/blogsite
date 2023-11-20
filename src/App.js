import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// importing components
import { MenuBar } from './components/menubar.component';
import { HeroSlider } from './components/hero-slider.component';

function App() {
  return (
    <Router>
      <MenuBar/>
      <HeroSlider/>
            {/* <Routes>
              <Route exact path="/" element={<Login />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/login" element={<Login />} />
              <Route path="/sign-up" element={<SignUp />} />
            </Routes> */}
    </Router>
  );
}

export default App;