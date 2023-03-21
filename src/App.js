import { HashRouter ,Link } from "react-router-dom";

function App() {
  return (
    <HashRouter>
    <div className="App">
      Test
    <div>
                  <Link to="/">Home</Link>
                  <Link to="/about">About</Link>
                  <Link to="/contact">Contact</Link>
            </div>
     </div>
  </HashRouter>
    
  );
}

export default App;
