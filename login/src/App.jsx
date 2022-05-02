import {BrowserRouter as Router,Route,Routes,Link} from "react-router-dom";
import { PrivateRoute } from "./components/PrivateRoute";
import Homepage from "./pages/HomePage";
import { LogIn } from "./pages/LogIn";
function App() {


  return (
    <div className="App">
     <Router>
    <Link to="/">Home</Link>
    <Link to="/login">Login</Link>
       <Routes>
       <Route path="/" element={<PrivateRoute > <Homepage /></PrivateRoute>} />
        <Route element={<LogIn />} path='/login' />
       </Routes>
     </Router>
    </div>
  )
}

export default App
