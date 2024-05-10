import About from "./components/About";
import Dashboard from "./components/Dashboard";
import Mastercraft from "./components/Mastercraft";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Mastercraft />
      <Dashboard />
      <About />
    </div>
  );
}

export default App;
