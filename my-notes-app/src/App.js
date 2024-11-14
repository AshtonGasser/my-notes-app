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

  const handleLogout = () => {
    localStorage.setItem('isAuthenticated', 'false');
    setIsAuthenticated(false);
  };
  return (
    <div className='App'>
      {isAuthenticated && <button onClick={handleLogout}>Logout</button>}
      {!isAuthenticated && (
        <button onClick={() => setLoginShow(true)}>Login</button>
      )}
      {!loginShow && <Notes isAuthenticated={isAuthenticated} />}
      {loginShow && <AuthPage onLogin={handleLogin} />}
    </div>
  );
}

export default App;
