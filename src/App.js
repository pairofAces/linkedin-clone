import React, { useEffect } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Feed from './components/Feed/Feed';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import Login from './components/Login/Login';
import { auth } from './components/Firebase/Firebase';

function App() {
  const user = useSelector(selectUser);

  useEffect(() => {
    auth.onAuthStateChanged(userAuth => {
      if (userAuth) {
        //the user is logged in
      } else {
        //the user is logged out
      }
    })
  }, [])
  
  return (
    <div className="app">
      <Header/>

      {!user ? <Login /> : (
    
        <div className="app_body">
          <Sidebar/>
          <Feed />
          {/* Widgets */}
        </div>
      )}

    </div>
  );
}

export default App;
