import "./App.css";
import { BrowserRouter, Routes, Route, Form } from "react-router-dom";
import injectContext from "./store/context";
import Home from "./views/Home";
import Private from "./views/Private";
import Register from "./views/Register";


function App() {
  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="register" element = {<Register/>} />
        <Route path="/private" element={<Private/>} />
      </Routes>
    </BrowserRouter>
  
  );
}

export default injectContext(App);