import "./App.css";
import "./fonts/fonts.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import OpeningPage from "./Components/openingPage";
import FirstPage from "./Components/LandingPage/FirstPage";
import ContactPage from "./Components/ContactPage/ContactPage";
import SideBar from "./Components/DashBoard/SideBar";
import DashBoard from "./Components/DashBoard/DashBoard";
import Cse from "./Components/DashBoard/Cse";
import ThirdYear from "./Components/DashBoard/Year/Third/ThirdYear";
import Micro from "./Components/DashBoard/Year/Third/Micro";
import Network from "./Components/DashBoard/Year/Third/Network";
import Login from "./Components/Authentications/Login";
import Signup from "./Components/Authentications/Signup";
import Third_Intro from "./Components/DashBoard/Year/Third/Third_Intro";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<OpeningPage />}></Route>
          <Route exact path="/login" element={<Login />}></Route>
          <Route exact path="/signup" element={<Signup />}></Route>
          <Route exact path="/home" element={<FirstPage />}></Route>
          <Route exact path="/contact" element={<ContactPage />}></Route>
          <Route exact path="/dashboard" element={<SideBar />}>
            <Route path="/dashboard/" element={<DashBoard />}></Route>
            <Route path="/dashboard/cse" element={<Cse />}>
              <Route path="/dashboard/cse/3rd" element={<ThirdYear />}>
                <Route
                  path="/dashboard/cse/3rd/"
                  element={<Third_Intro />}
                ></Route>
                <Route
                  path="/dashboard/cse/3rd/micro"
                  element={<Micro />}
                ></Route>
                <Route
                  path="/dashboard/cse/3rd/network"
                  element={<Network />}
                ></Route>
              </Route>
            </Route>
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
