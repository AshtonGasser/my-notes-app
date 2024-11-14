import './App.css';
import Notes from './components/Notes';
import { useState, useEffect } from 'react';
import AuthPage from './components/AuthPage/AuthPage';
function App() {

  const [loginShow, setLoginShow] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  
  const handleLogin = () => {
    localStorage.setItem('isAuthenticated', 'true');
    setIsAuthenticated(true);
    setLoginShow(false);
  };
  return (
    <div className='App'>
      <Notes />
      {loginShow && <AuthPage onLogin={handleLogin} />}
    </div>
  );
}

export default App;
