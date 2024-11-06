import Course from "./component/Course";
import Home from "./component/home/Home";
import {Route,Routes} from 'react-router-dom'
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";

function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element = {<Home />}/>
      <Route path="/course" element = {<Course />} />
    </Routes>
    <Footer />
    </>
  );
}

export default App;
