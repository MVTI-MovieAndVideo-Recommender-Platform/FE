import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
//import Button  from "./Button.js";
//import user from "./User.js";
//로고- 홈으로 이동
//검색창- 
//로그인/회원가입- 해당 모달 이동

const Header = () => {
  return (
    <header className="App-header">
      <p>App-header</p>
      <Link to="/">
         <h1>MVTI</h1>
      </Link>
         <nav className="App-header-navbar">
            <Link to="/">HomePage</Link>
            <Link to="/content/:id">DetailPage</Link>
            < Link to="/Login">LogInModal</Link>
            
            <Link to="/MVTIResultPage">MVTIResultPage</Link>
            <Link to="/MVTITestPage">MVTITestPage</Link>
         </nav>
    </header>
    
  );
}

export default Header;

//{!user && <Button text="Login" onClick={login}></Button>}
//{user && <Button text="Logout" onClick={logout}></Button>}