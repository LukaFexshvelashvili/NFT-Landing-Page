import Discover from "../Sections/Discover/Discover";
import Nav from "../Components/Navbar/Nav";
import HotDrop from "../Sections/HotDrop/HotDrop";
import Starter from "../Sections/Starter/Starter";
import "./App.css";
import Sellers from "../Sections/Sellers/Sellers";
import Footer from "../Components/Footer/Footer";
import { useState } from "react";

function App() {
  const [Anims, setAnims] = useState(1);
  const getLoad = () => {
    setAnims(0);
  };
  window.onload = getLoad;

  return (
    <div className="App">
      <Nav Anims={Anims} />
      <Starter Anims={Anims} />
      <HotDrop />
      <Discover />
      <Sellers />
      <Footer />
    </div>
  );
}

export default App;
