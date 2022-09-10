import background from "./img1.jpg";
import "./App.css";
import Navbar from "./component/Navbar.js";
import Home from "./component/Home";
import About from "./component/About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NoteState from "./context/NoteState";
function App() {
  const myStyle = {
    fontSize: "20px",
    height: "100vh",
    backgroundImage: `url(${background})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };
  return (
    <>
    <NoteState>
      <Router>
        <Navbar />
        <div style={myStyle}>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<About />} />
          </Routes>
        </div>
      </Router>
      </NoteState>
    </>
  );
}
export default App;
