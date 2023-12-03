import "./App.css";
import OpeningPage from "./Components/openingPage";
import "./fonts/fonts.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FirstPage from "./Components/landingPage/FirstPage";
import ContactPage from "./Components/ContactPage/ContactPage";
import SideBar from "./Components/DashBoard/SideBar";
import DashBoard from "./Components/DashBoard/DashBoard";
import Cse from "./Components/DashBoard/Cse";
import FirstYear from "./Components/DashBoard/Year/First/FirstYear";
import SecondYear from "./Components/DashBoard/Year/Third/ThirdYear";
import ThirdYear from "./Components/DashBoard/Year/Third/ThirdYear";
import FourthYear from "./Components/DashBoard/Year/Fourth/FourthYear";
import Micro from "./Components/DashBoard/Year/Third/Micro";
import Network from "./Components/DashBoard/Year/Third/Network";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<OpeningPage />}></Route>
          <Route exact path="/home" element={<FirstPage />}></Route>
          <Route exact path="/contact" element={<ContactPage />}></Route>
          <Route exact path="/dashboard" element={<SideBar />}>
            <Route path="/dashboard/" element={<DashBoard />}></Route>
            <Route path="/dashboard/cse" element={<Cse />}>
              <Route
                path="/dashboard/cse/1st"
                element={<FirstYear year="1st" />}
              ></Route>
              <Route
                path="/dashboard/cse/2nd"
                element={<SecondYear year="2nd" />}
              ></Route>
              <Route
                path="/dashboard/cse/3rd"
                element={<ThirdYear year="3rd" />}
              >
                <Route path="/dashboard/cse/3rd/micro" element={<Micro/>}></Route>
                <Route path="/dashboard/cse/3rd/network" element={<Network/>}></Route>

              </Route>
              <Route
                path="/dashboard/cse/4th"
                element={<FourthYear year="4th" />}
              ></Route>
            </Route>
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
