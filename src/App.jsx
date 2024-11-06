
import UserPage from "./pages/UserPage";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WeatherPage from "./pages/WeatherPage";

function App() {

  return (
    <>
    <Router>
  <Routes>
    <Route path="/" element={<UserPage/>}/>
    <Route path="/weather" element={<WeatherPage/>}/>
  </Routes>
 </Router>   

    
    </>
  )
}

export default App
