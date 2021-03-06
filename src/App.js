import React, { useEffect } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Feed from './components/Feed/Feed';
import Login from './components/Login/Login';
import Widgets from './components/Widgets/Widgets';
import { auth } from './components/Firebase/Firebase';
import { login, logout, selectUser } from './features/userSlice';
import { useDispatch, useSelector } from 'react-redux';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged(userAuth => {
      if (userAuth) {
        //the user is logged in
        dispatch(login({
          email: userAuth.email,
          uid: userAuth.uid,
          displayName: userAuth.displayName,
          photoUrl: userAuth.photoURL,
        }))
      } else {
        //the user is logged out
        dispatch(logout());
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
          <Widgets />
        </div>
      )}

    </div>
  );
}

export default App;
