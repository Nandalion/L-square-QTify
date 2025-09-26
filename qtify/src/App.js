import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>
        <Hero/>
      </header>
    </div>
  );
}

export default App;
