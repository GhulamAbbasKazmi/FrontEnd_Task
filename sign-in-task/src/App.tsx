
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import  { AuthProvider } from './context/AuthContext';
import Home from './components/Home';

const App = () => {

  return (
    <AuthProvider>
      <Router>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/home" element={<Home />} />
            </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
