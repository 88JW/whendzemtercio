import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import { Container } from "react-bootstrap";



function App() {
  return (
    <div className="BG__conteiner">
      <div className="App__conteiner">

        <div>
          <Navbar />
        </div>

      </div>
    </div>
  );
}
export default App;
