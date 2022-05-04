import {BrowserRouter as Router,Route,Routes,Link} from "react-router-dom";
import { PrivateRoute } from "./components/PrivateRoute";
import Homepage from "./pages/HomePage";
import Registration from "./pages/Registration"
import { LogIn } from "./pages/LogIn";
function App() {


  return (
    <div className="App">
     <Router>
       <nav className="nav-bar">
        <Link className="nav-link" to="/">Home</Link>
        <Link className="nav-link" to="/login">Login</Link>
        <Link className="nav-link" to="/reg">Sign Up</Link>
       </nav>
    
       <Routes>
        <Route path="/" element={<PrivateRoute > <Homepage /> </PrivateRoute>} />
        <Route path='/reg' element={<Registration />} />
        <Route element={<LogIn />} path='/login' />
       </Routes>
     </Router>
    </div>
  )
}

export default App
