import React from 'react';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';
import { Link } from 'react-router-dom';

const Logout = ({ setIsAuth }) => {
  const logout = () => {
    //Googleでログアウト
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
    });
  };
  logout();

  return (
    <div>
      <p>ログアウトしました</p>
      <Link to="/">ホーム画面へ</Link>
    </div>
  );
};

export default Logout;
