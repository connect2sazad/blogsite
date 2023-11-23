import './styles/App.css';
import { BrowserRouter as Router } from "react-router-dom";

import WebRoutes from "./components/webroutes.component";

function App() {
  return (
    <>
      <Router>
        <WebRoutes/>
      </Router>
    </>
  );
}

export default App;
