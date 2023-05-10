import "./App.css";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Reviews from "./Pages/Reviews/Reviews";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { IS_SIGNEDIN } from "./Redux/Reducers/AuthReducer";
import RvDetails from "./Pages/RvDetails/RvDetails";

function App() {
  const dispatch = useDispatch();
  const getItem = () => {
    const loginState = localStorage.getItem("loginState");
    if (loginState != null) {
      dispatch({ type: IS_SIGNEDIN, payload: loginState });
    }
  };
  useEffect(() => {
    getItem();
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/rv-details/:id" element={<RvDetails />} />
      </Routes>
    </Router>
  );
}

export default App