import AppBar  from "./Appbar";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Courses from "./Courses";
import AddCourse from "./Addcourse";
import SignUp from "./Signup";
import SignIn from "./Signin";
import Course from "./Course";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';



function App() {
  

  return (
    <div style={{width:"100vw", height:"100vh", backgroundColor:"#eeeeee"}}>
      <RecoilRoot>
        <Router>
        <AppBar/>
          <Routes>
            <Route path="/addcourse" element={<AddCourse/>}/>
            <Route path="/course/:courseId" element={<Course/>}/>
            <Route path="/courses" element={<Courses/>}/>
            <Route path="/login" element={<SignIn/>}/>
            <Route path="/signup" element={<SignUp/>}/>
          </Routes>
        </Router>
      </RecoilRoot>
    </div>
  )
}


export default App;
