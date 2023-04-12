import Nav from "../Components/Navbar/Nav";
import HotDrop from "../Sections/HotDrop/HotDrop";
import Starter from "../Sections/Starter/Starter";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Nav />
      <Starter />
      <HotDrop />
    </div>
  );
}

export default App;
