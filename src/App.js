import './App.css';
import { Route, Routes } from "react-router-dom";
import Dashborad from '../src/component/dashbord/Dashborad'
import Login from './component/auth/Login';
import SignUp from './component/auth/SignUp';
import Home from './component/home/Home';
import AllCourse from './component/dashbord/AllCourse';
import AddCourse from './component/dashbord/AddCourse';
import EditCourse from './component/dashbord/EditCourse';
function App() {
  return (
    <>
       <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<SignUp />} />
        <Route exact path="/dashborad" element={<Dashborad />} />
        {/* <Route  path="/dashborad/all-course/:currentPage?" element={Dashborad} exact />
        <Route path="/dashborad/course-add" element={Dashborad} exact />
        <Route path="/dashborad/course/edit/:courseSlug" element={Dashborad} exact /> */}
        <Route  path="/dashborad/all-course/:currentPage?" element={AllCourse} exact />
        <Route path="/dashborad/course-add" element={AddCourse} exact />
        <Route path="/dashborad/course/edit/:courseSlug" element={EditCourse} exact />
       </Routes>
    </>
  );
}

export default App;
