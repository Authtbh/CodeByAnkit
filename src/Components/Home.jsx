import React from "react";
import { Search } from "lucide-react";

const Home = () => {
  return (
    <>
      <div className="header">
        <div className="logo-section">
          <div className="profile-image">
            <img src="/src/assets/profile-pic.png" alt="logo" />
          </div>
        </div>

        <div className="Button-section">
        <form className="search-section">
          <input
            type="search"
            id="query"
            placeholder="Type here to search.."
            aria-label="Search through site content"
          />
          <button>
            <Search className="search-icon" />
          </button>
        </form>
        <div className="login-signIn">
          <button className="signUp-button">Signup</button>
          <button className="logIn-button">Login</button>
          
        </div>
        </div>
      </div>
    </>
  );
};

export default Home;
